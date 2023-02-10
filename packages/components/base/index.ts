import { withInstall } from '~/utils/install'
import _JBase from './src/JBase.vue'

export const JBase = withInstall(_JBase)
export default JBase
export type TJBase = InstanceType<typeof _JBase>
