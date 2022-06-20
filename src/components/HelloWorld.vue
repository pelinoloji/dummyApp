<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style>
#dummy-root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border: 5px solid blue;
}
</style>
