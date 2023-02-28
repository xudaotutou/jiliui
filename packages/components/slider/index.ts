import { withInstall } from '~/utils/install'
import _JSlider from './src/JSlider.vue'
export const JSlider = withInstall(_JSlider)
export default JSlider
export type TJSlider = InstanceType<typeof JSlider>
