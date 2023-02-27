import { withInstall } from '~/utils/install'
import _JDropdown from './src/JDropdown.vue'
export const JDropdown = withInstall(_JDropdown)
export default JDropdown
export type TJDropdown = InstanceType<typeof JDropdown>
