import { withInstall } from '~/utils/install'
import _JDropdownMenu from './src/JDropdownMenu.vue'
export const JDropdownMenu = withInstall(_JDropdownMenu)
export default JDropdownMenu
export type TJDropdownMenu = InstanceType<typeof JDropdownMenu>
