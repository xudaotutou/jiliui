import type { App } from 'vue'
import JDropdown from './components/dropdown'
import JDropdownItem from './components/dropdownItem'
import JDropdownMenu from './components/dropdownMenu'
import JInputNumber from './components/input-number'
import JLayout from './components/layout'
import JMenu from './components/menu'
import JMenuItem from './components/menuItem'
import JMenuSub from './components/menuSub'
import JSlider from './components/slider'
import JSteps from './components/steps/src/JSteps.vue'
import JBackToTop from './components/backToTop'
import JBase from './components/base'
import JButtonBase from './components/buttons'
import JCalendar from './components/calendar'
import JProgress from './components/progress'
import JRProgress from './components/rprogress'
import JTab from './components/tab'
import JScrollbar from './components/scrollbar'
import JAlert from './components/alert'
import JInput from './components/input'
const components = [
  JAlert,
  JDropdown,
  JDropdownItem,
  JDropdownMenu,
  JInput,
  JInputNumber,
  JMenu,
  JMenuItem,
  JMenuSub,
  JScrollbar,
  JSlider,
  JSteps,
  JButtonBase,
  JCalendar,
  JProgress,
  JRProgress,
  JBackToTop,
  JBase,
  JLayout,
  JTab
]

function install (vue: App): void {
  components.forEach((comp) => {
    if (comp.install !== undefined) comp.install(vue)
  })
}

export default {
  install
}
export * from './components/buttons'
export * from './components/calendar'
export * from './components/rprogress'
export * from './components/progress'
export * from './components/backToTop'
export * from './components/alert'
export * from './components/dropdown'
export * from './components/dropdownItem'
export * from './components/dropdownMenu'
export * from './components/input'
export * from './components/input-number'
export * from './components/menu'
export * from './components/menuItem'
export * from './components/menuSub'
export * from './components/scrollbar'
export * from './components/slider'
export * from './components/steps'
export * from './components/tab'
