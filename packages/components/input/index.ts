import { withInstall } from '~/utils/install'
import _JInput from './src/JInput.vue'
export const JInput = withInstall(_JInput)
export default JInput
export type TJInput = InstanceType<typeof JInput>
