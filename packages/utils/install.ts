import './style.css'
import type { App } from 'vue' // 只是导入类型不是导入App的值

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const withInstall = (comp: any) => {
  comp.install = function (app: App) {
    app.component(comp.name, comp)
  }
  return comp
}
