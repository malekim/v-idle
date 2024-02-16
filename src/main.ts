import Vue from 'vue'
import Vidle from './'

Vue.use(Vidle)

new Vue({
  el: '#app',
  render: (createElement) => {
    return createElement('v-idle', {
      props: {
        duration: 10,
        loop: true,
      },
      on: {
        idle: () => {
          console.error('idle')
        },
      },
    })
  },
  methods: {
    onidle() {
      alert('idle')
    },
  },
})
