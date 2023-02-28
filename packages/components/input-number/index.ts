import { withInstall } from '~/utils/install'
import _JIputNumber from './src/inputNumberBase.vue'

export const JIputNumber = withInstall(_JIputNumber)
export default JIputNumber
export type TProgress = InstanceType<typeof _JIputNumber>
