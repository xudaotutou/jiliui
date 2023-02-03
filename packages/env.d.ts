declare module '*.vue' {
  import { Component,  Plugin } from 'vue'
  const component: Component & Plugin
  export default component
}