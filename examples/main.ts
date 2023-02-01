import { createApp } from "vue";
// import './style.css'
import App from "./App.vue";
// import "../packages/index"
import ButtonBase from "../packages";

createApp(App)
  .use(ButtonBase)
  .mount("#app");
