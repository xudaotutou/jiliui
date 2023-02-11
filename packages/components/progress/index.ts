import { withInstall } from '~/utils/install'
import _JProgress from './src/JProgress.vue'

export const JProgress = withInstall(_JProgress)
export default JProgress
export type TProgress = InstanceType<typeof _JProgress>
