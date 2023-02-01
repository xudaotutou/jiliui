import type { App } from "vue";
import MyButton from "./components/buttons";
import "./utils/style.css"

const install = (Vue: App): void => {
  Vue.component("MyButton", MyButton)
};

export default { 
  install
}
