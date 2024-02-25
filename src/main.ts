import { createApp, h } from 'vue-demi'
import Vidle from './'

const app = createApp({
  setup() {
    return () =>
      h('div', {}, [
        h(Vidle, {
          duration: 5,
          loop: false,
          syncKey: 'sync-key-test',
          reminders: [3, 1],
          onIdle: () => {
            console.error('idle_log')
          },
          onRemind: () => {
            console.info('remind_log')
          },
        }),
      ])
  },
})

app.mount('#app')
