/// <reference types="vite/client" />
declare module '*.vue' {
  // import { Component,  Plugin } from 'vue'
  // const component: Component & Plugin
  import { defineComponent } from 'vue'

  const component: ReturnType<typeof defineComponent>
  export default component
}