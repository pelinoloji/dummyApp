import { createApp } from "vue";
import App from "./App.vue";
import router from "../src/router";


window.mountShared = () => {
  createApp(App).use(router).mount(`#shared-root`);
};

window.unmountShared = () => {
  const container = document.getElementById(`#shared-root`);

  if (container) document.removeChild(container);
};
