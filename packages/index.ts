import type { App } from 'vue'
import JBackToTop from './components/backToTop'
import JBase from './components/base'
import JButtonBase from './components/buttons'
import JCalendar from './components/calendar'
import JLayout from './components/layout'
import JProgress from './components/progress'
import JRProgress from './components/rprogress'

const components = [
  JButtonBase,
  JCalendar,
  JProgress,
  JRProgress,
  JBackToTop,
  JBase,
  JLayout
]
let installed = false

function install (vue: App): void {
  if (installed) return
  installed = true
  components.forEach((comp) => {
    if (comp.install !== undefined) vue.use(comp)
  })
}

export {
  install
}
export * from './components/buttons'
export * from './components/calendar'
// export * from './components/layout'
