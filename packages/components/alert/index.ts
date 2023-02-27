import { withInstall } from '~/utils/install'
import _JAlert from './src/alert.vue'

export const JAlert = withInstall(_JAlert)
export default JAlert
export type TJAlert = InstanceType<typeof _JAlert>
