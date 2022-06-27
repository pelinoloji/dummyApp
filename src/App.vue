<template>
  <div>
    <HelloWorld msg="Shared App (Child)" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/swoop/_variables.scss";

div {
  background-color: $color-waikawa-gray;
}
</style>

