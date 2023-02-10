import { withInstall } from '~/utils/install'
import _JLayout from './src/JLayout.vue'
export const JLayout = withInstall(_JLayout)
export default JLayout
export type TJLayout = InstanceType<typeof _JLayout>
