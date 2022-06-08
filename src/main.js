import { createApp } from "vue";
import App from "./App.vue";
import router from "../src/router";

// createApp(App).mount('#app')

window.mountDummyApp = () => {
    console.log('mountDummyApp')
  createApp(App).use(router).mount(`#dummy-app`);
};

window.unmountDummyApp = () => {
    console.log('unmountDummyApp')
  const container = document.getElementById(`#dummy-app`);

  if (container) document.removeChild(container);
};
