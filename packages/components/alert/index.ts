import { withInstall } from '~/utils/install'
import _JAlert from './src/alertBase.vue'

export const JAlert = withInstall(_JAlert)
export default JAlert
export type TProgress = InstanceType<typeof _JAlert>
