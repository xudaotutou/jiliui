import { withInstall } from '~/utils/install'
import _JCalendar from './src/JCalendar.vue'
export const JCalendar = withInstall(_JCalendar)
export default JCalendar
export type TJCalendar = InstanceType<typeof JCalendar>
