import { withInstall } from '~/utils/install'
import _JRProgress from './src/JRProgress.vue'

export const JRProgress = withInstall(_JRProgress)
export default JRProgress
export type TRProgress = InstanceType<typeof _JRProgress>
