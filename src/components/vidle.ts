import {
  h,
  nextTick,
  ref,
  defineComponent,
  type PropType,
  type Ref,
  onMounted,
  onBeforeUnmount,
} from 'vue-demi'

type ClearEvent = {
  type: string
  key: string | undefined
}

export default defineComponent({
  emits: ['idle', 'remind', 'refresh'],
  props: {
    duration: {
      type: Number,
      // default 5 minutes
      default: 60 * 5,
    },
    events: {
      type: Array as PropType<string[]>,
      default: (): string[] => ['mousemove', 'keypress'],
    },
    loop: {
      type: Boolean,
      default: false,
    },
    syncKey: {
      type: String,
      default: '',
    },
    reminders: {
      type: Array as PropType<number[]>,
      // array of seconds
      // emit "remind" event on each second
      default: (): number[] => [],
    },
    wait: {
      type: Number,
      default: 0,
    },
  },
  setup: (props, { emit }) => {
    const display: Ref<string> = ref('')
    const timer: Ref<number | undefined> = ref(undefined)
    const start: Ref<number> = ref(0)
    const counter: Ref<number | undefined> = ref(undefined)
    const diff: Ref<number> = ref(0)
    const minutes: Ref<string> = ref('')
    const seconds: Ref<string> = ref('')
    const broadcastChannel: Ref<BroadcastChannel | undefined> = ref(undefined)

    const isSyncEnabled: boolean =
      props.syncKey.length > 0 &&
      typeof window !== 'undefined' &&
      'BroadcastChannel' in window

    const shouldRemind = () => {
      if (props.reminders.length > 0) {
        if (props.reminders.includes(diff.value)) {
          remind()
        }
      }
    }

    const setDisplay = () => {
      // seconds since start
      diff.value = props.duration - (((Date.now() - start.value) / 1000) | 0)

      if (diff.value < 0 && !props.loop) {
        clearInterval(timer.value)
        clearInterval(counter.value)
        return
      }
      shouldRemind()

      // bitwise OR to handle parseInt
      const minute = (diff.value / 60) | 0
      const second = diff.value % 60 | 0

      minutes.value = `${minute < 10 ? '0' + minute : minute}`
      seconds.value = `${second < 10 ? '0' + second : second}`

      display.value = `${minutes.value}:${seconds.value}`
    }

    const countdown = () => {
      setDisplay()

      if (diff.value <= 0 && props.loop) {
        // add second to start at the full duration
        // for instance 05:00, not 04:59
        start.value = Date.now() + 1000
      }
    }

    const idle = () => {
      emit('idle')
    }

    const remind = () => {
      emit('remind')
    }

    const setTimer = () => {
      timer.value = window.setInterval(idle, props.duration * 1000)
      counter.value = window.setInterval(countdown, 1000)
    }

    const clearEvent = (event: Event) => {
      const clearEvent: ClearEvent = {
        type: event.type,
        key: event instanceof KeyboardEvent ? event.key : undefined,
      }
      clearTimer(clearEvent)
      // clearEvent is called only in original tab when sync is on
      if (isSyncEnabled) {
        sendBroadcastEvent(clearEvent)
      }
    }

    const clearTimer = (clearEvent: ClearEvent) => {
      emit('refresh', clearEvent)
      clearInterval(timer.value)
      clearInterval(counter.value)
      setDisplay()
      start.value = Date.now()
      diff.value = 0
      setTimer()
    }

    const sendBroadcastEvent = (event: ClearEvent) => {
      if (broadcastChannel.value !== undefined) {
        broadcastChannel.value.postMessage(event)
      }
    }

    const setBroadcastChannel = () => {
      broadcastChannel.value = new BroadcastChannel(props.syncKey)
      broadcastChannel.value.addEventListener(
        'message',
        (event: MessageEvent<ClearEvent>) => {
          clearTimer(event.data)
        },
      )
    }

    onMounted(() => {
      if (isSyncEnabled) {
        setBroadcastChannel()
      }
      setTimeout(() => {
        start.value = Date.now()
        setDisplay()
        nextTick(() => {
          setTimer()
          for (let i = props.events.length - 1; i >= 0; i -= 1) {
            window.addEventListener(props.events[i], clearEvent)
          }
        })
      }, props.wait * 1000)
    })

    onBeforeUnmount(() => {
      clearInterval(timer.value)
      clearInterval(counter.value)
      for (let i = props.events.length - 1; i >= 0; i -= 1) {
        window.removeEventListener(props.events[i], clearEvent)
      }
    })

    return {
      display,
    }
  },
  render() {
    return h(
      'div',
      {
        class: 'v-idle',
      },
      this.display,
    )
  },
})
