import { withInstall } from '~/utils/install'
import _JMenu from './src/JMenu.vue'
export const JMenu = withInstall(_JMenu)
export default JMenu
export type TJMenu = InstanceType<typeof JMenu>
