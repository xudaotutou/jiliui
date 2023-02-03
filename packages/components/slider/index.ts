import Base from './src/SliderBase.vue'
export default Base
declare module 'vue' {
  export interface GlobalComponents {
    Base: typeof Base
  }
}
