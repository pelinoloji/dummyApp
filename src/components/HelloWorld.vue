<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Spinner />
  </div>
</template>

<script>
import Spinner from './Spinner.vue'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components:{
    Spinner
  }
};
</script>

<style>

</style>
