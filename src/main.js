import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/tailwind.css'

createApp(App).use(store).use(router).mount("#app");
