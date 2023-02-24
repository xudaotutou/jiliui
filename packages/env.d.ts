// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite/client" />
// components.d.ts
import type JBackToTop from './components/backToTop/src/JBackToTop.vue'
import type JCalendarBase from './components/calendar/src/JCalendarBase.vue'
import type JButtonBase from './components/buttons/src/JButtonBase.vue'
// declare module '*.vue' {
//   // import { Component,  Plugin } from 'vue'
//   // const component: Component & Plugin
//   import { type defineComponent } from 'vue'

//   const component: ReturnType<typeof defineComponent>
//   export default component
// }
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    TJBackToTop: typeof JBackToTop
    TJCalendarBase: typeof JCalendarBase
    TJButtonBase: typeof JButtonBase
  }
}
export {}
