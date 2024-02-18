import { VueConstructor } from 'vue'
import vidle from './components/vidle'

const VidlePlugin = {
  install(Vue: VueConstructor): void {
    Vue.component('v-idle', vidle)
  },
}

export { vidle }
export default VidlePlugin
