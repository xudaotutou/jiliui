import type { App } from 'vue'
import JBackToTop from './components/backToTop'
import JBase from './components/base'
import JButtonBase from './components/buttons'
import JCalendar from './components/calendar'
import JLayout from './components/layout'
import JProgress from './components/progress'
import JRProgress from './components/rprogress'
import JTab from './components/tab'
const components = [
  JButtonBase,
  JCalendar,
  JProgress,
  JRProgress,
  JBackToTop,
  JBase,
  JLayout,
  JTab
]
const installed = Symbol('install')

function install (vue: App): void {
  if ((vue as any)[installed] as boolean) return
  (vue as any)[installed] = true
  components.forEach((comp) => {
    console.log(comp)
    if (comp.install !== undefined) comp.install(vue)
  })
}

export default {
  install
}
export * from './components/buttons'
export * from './components/calendar'
export * from './components/tab'
export * from './components/rprogress'
export * from './components/progress'
// export * from './components/layout'
