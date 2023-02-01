import Base from './src/ButtonBase.vue'
export default Base
declare module 'vue' {
  export interface GlobalComponents {
    Base: typeof Base
  }
}
