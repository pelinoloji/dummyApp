<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <!-- <main id="swoop-root" /> -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      host: "http://localhost:3000",
      name: "Swoop",
    };
  },
  mounted() {
    this.getManifest();
  },
  methods: {
    mountMicroFrontend() {
      const windowMethod = window[`mount${this.name}`];

      if (windowMethod) windowMethod("swoop-root");
    },
    unmountMicroFrontend() {
      const windowMethod = window[`unmount${this.name}`];

      if (windowMethod) windowMethod("swoop-root");
    },
    getManifest() {

      const scriptId = `micro-frontend-script-${this.name}`

      if (document.getElementById(scriptId)) {
        // this.unmountMicroFrontend();
        this.mountMicroFrontend();

        return
      }

      fetch(`${this.host}/asset-manifest.json`)
        .then((res) => res.json())
        .then((manifest) => {
         console.log(manifest,'halo')
          // Object.keys(manifest.files).map((key) => {
          //   const script = document.createElement("script");

          //   if (!key.endsWith(".js")) return;

          //   script.id = scriptId;
          //   script.crossOrigin = "";
          //   script.src = `${this.host}${manifest.files[key]}`;

          //   script.onload = () => {
          //     this.mountMicroFrontend();
          //   };

          //   document.head.appendChild(script);
          // });
        });
    },
  },
};
</script>

<style>

#dummy-root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border: 5px solid blue;
}
</style>
