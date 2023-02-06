// import Base from './src/SliderBase.vue'
// export default Base
// declare module 'vue' {
//   export interface GlobalComponents {
//     Base: typeof Base
//   }
// }
import { withInstall } from '~/utils/install'
import _JSliderBase from './src/JSliderBase.vue'
// Base.name = "MyButton"
// export default withInstall(Base)
export const JSliderBase = withInstall(_JSliderBase)
export default JSliderBase