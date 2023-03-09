import { withInstall } from '~/utils/install'
import _JButtonBase from './src/JButtonBase.vue'
export const JButtonBase = withInstall(_JButtonBase)
export default JButtonBase
export type TJButtonBase = InstanceType<typeof _JButtonBase>
