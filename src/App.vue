<template>
  <div>
    <!-- <img alt="logo" src="@/assets/logo.png" /> -->
    <HelloWorld msg="Child" />
    <Spinner />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Spinner from "./components/Spinner.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Spinner,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/swoop/_variables.scss";

div {
  background-color: $color-waikawa-gray;
}
</style>

