import type JBackToTop from './components/backToTop/src/JBackToTop.vue'
import type JCalendar from './components/calendar/src/JCalendar.vue'
import type JButton from './components/buttons/src/JButton.vue'
import type Jalert from './components/alert/src/JAlert.vue'

import '@vue/runtime-core'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    TJBackToTop: typeof JBackToTop
    TJCalendar: typeof JCalendar
    TJButton: typeof JButton
    TJalert: typeof Jalert
  }
}
export {}
