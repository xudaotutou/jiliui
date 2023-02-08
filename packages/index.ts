import type { App } from 'vue'
import JButtonBase from './components/buttons'
import JCalendar from './components/calendar'

const components = [
  JButtonBase,
  JCalendar
]
let installed = false

function install (vue: App): void {
  if (installed) return
  installed = true
  components.forEach((comp) => {
    vue.use(comp)
  })
}

export {
  install
}
export * from './components/buttons'
export * from './components/calendar'
// export * from './components/layout'
