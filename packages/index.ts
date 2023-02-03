import type { App } from "vue";
import MyButton from "./components/buttons";
const components = [
  MyButton,
];
function install(vue:App) {
  components.forEach((comp) => {
    if (comp.install === undefined) {
      vue.component(comp.name, comp);
    }
  });
}

export default { install, MyButton };
