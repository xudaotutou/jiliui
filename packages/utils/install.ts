import './style.css'
import type { App, Component, ComputedOptions, MethodOptions, Plugin } from 'vue' // 只是导入类型不是导入App的值
type SfcWithInstall<T> = T & Plugin

export const withInstall = <T extends Component<unknown, unknown, unknown, ComputedOptions, MethodOptions>>(comp: T): SfcWithInstall<T> => {
  (comp as SfcWithInstall<T>).install = function (app: App): void {
    (comp as any).__name !== undefined && app.component((comp as any).__name as string, comp)
  }
  return comp as SfcWithInstall<T>
}
