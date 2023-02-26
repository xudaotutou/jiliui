import { withInstall } from '~/utils/install'
import _JInput from './src/inputBase.vue'

export const JInput = withInstall(_JInput)
export default JInput
export type TProgress = InstanceType<typeof _JInput>
