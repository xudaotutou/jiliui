import Base from "./src/ButtonBase.vue";
export default Base;

import type {App} from 'vue'
// import MyButton from 

Base.install =(Vue: 
  App): void => {
  Vue.component('MyButton', Base)
}
declare module "vue" {
  export interface GlobalComponents {
    Base: typeof Base;
  }
}
