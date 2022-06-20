import { createApp } from "vue";
import App from "./App.vue";
import router from "../src/router";


window.mountDummy = () => {
  createApp(App).use(router).mount(`#dummy-root`);
};

window.unmountDummy = () => {
  const container = document.getElementById(`#dummy-root`);

  if (container) document.removeChild(container);
};
