<<<<<<< HEAD

import Base from './src/ButtonBase.vue'
export default Base

declare module 'vue' {
=======
import Base from "./src/ButtonBase.vue";
export default Base;

import type {App} from 'vue'
// import MyButton from 

Base.install =(Vue: 
  App): void => {
  Vue.component('MyButton', Base)
}
declare module "vue" {
>>>>>>> 35503b4606fceca3370aafafbaa70cd6f9ed0d4c
  export interface GlobalComponents {
    Base: typeof Base
  }
}
