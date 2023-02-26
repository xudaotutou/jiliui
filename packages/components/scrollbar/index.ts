import { withInstall } from '~/utils/install'
import _JScrollbar from './src/scrollbarBase.vue'

export const JScrollbar = withInstall(_JScrollbar)
export default JScrollbar
export type TJScrollbar = InstanceType<typeof _JScrollbar>