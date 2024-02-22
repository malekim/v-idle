import { createApp, h } from 'vue-demi'
import Vidle from './'

const app = createApp({
  setup() {
    return () =>
      h('div', {}, [
        h(Vidle, {
          duration: 10,
          loop: false,
          onIdle: () => {
            console.error('idle')
          },
        }),
      ])
  },
})

app.mount('#app')
