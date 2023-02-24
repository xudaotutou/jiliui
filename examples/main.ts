import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
// import {JButtonBase} from '../dist'
// import ui from '../dist'
// import "../packages/index"
createApp(App)
  .use(router)
// .use(JButtonBase)
  .mount('#app')
