import { createApp, defineComponent, h, ref } from 'vue'
import Vidle from '../../../'

const test = defineComponent({
  components: {
    Vidle,
  },
  setup: () => {
    const display = ref('test')
    const onClick = () => {
      display.value = 'clicked'
    }

    return () =>
      h(
        'div',
        {
          onClick: onClick,
        },
        [display.value, h(Vidle)],
      )
  },
})

const app = createApp(test)

app.mount('#app')
