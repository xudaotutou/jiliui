import { withInstall } from '~/utils/install'
import _JTab from './src/JTab.vue'
export const JTab = withInstall(_JTab)
export default JTab
export type TJTab = InstanceType<typeof _JTab>
