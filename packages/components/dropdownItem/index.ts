import { withInstall } from '~/utils/install'
import _JDropdownItem from './src/JDropdownItem.vue'
export const JDropdownItem = withInstall(_JDropdownItem)
export default JDropdownItem
export type TJDropdownItem = InstanceType<typeof JDropdownItem>
