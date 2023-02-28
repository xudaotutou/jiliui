import { withInstall } from '~/utils/install'
import _JInput from './src/JInputNumber.vue'
export const JInputNumber = withInstall(_JInput)
export default JInputNumber
export type TJInputNumber = InstanceType<typeof JInputNumber>
