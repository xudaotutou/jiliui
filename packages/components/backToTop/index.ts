import { withInstall } from '~/utils/install'
import _JBackToTop from './src/JBackToTop.vue'

export const JBackToTop = withInstall(_JBackToTop)
export default JBackToTop
export type TJBackToTop = InstanceType<typeof _JBackToTop>
