import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
// import * as mdijs from "@mdi/js";

createApp(App).use(store).use(router).mount("#app");
