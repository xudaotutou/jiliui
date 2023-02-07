// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite/client" />
declare module '*.vue' {
  // import { Component,  Plugin } from 'vue'
  // const component: Component & Plugin
  import { type defineComponent } from 'vue'

  const component: ReturnType<typeof defineComponent>
  export default component
}
