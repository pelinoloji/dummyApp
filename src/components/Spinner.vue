<template>
  <img class="loader" src="../../public/img/funding/double-ring-spinner.svg" :style="style" alt="spinner" v-if="loader" />
  <span v-else class="relative">
    <div class="spinner" :style="style"></div>
  </span>
</template>
<script>
export default {
  name: 'Spinner',
  props: {
    color: {
      type: String,
      default: '#2e9c8e'
    },
    size: {
      type: Number,
      default: 18
    },
    width: {
      type: Number,
      default: 1
    },
    duration: {
      type: String,
      default: '1s'
    },
    loader: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style() {
      return {
        borderTopColor: this.color,
        maxWidth: `${this.size}px`,
        maxHeight: `${this.size}px`,
        width: `${this.size}px`,
        height: `${this.size}px`,
        borderWidth: `${this.width}px`,
        animationDuration: this.duration
      }
    }
  }
}
</script>
<style scoped lang='scss'>
@import '../assets/styles/swoop/_variables.scss';
.loader {
  opacity: 1;
  display: inline-block;
  width: 18px;
  height: 18px;
  max-width: 18px;
  max-height: 18px;
  animation: spin 800ms ease infinite;
  transition: all 0.2s ease;
}
.hidden .spinner {
  max-width: 0 !important;
  max-height: 0 !important;
  border-width: 0 !important;
  margin: 0;
  opacity: 0;
}
.spinner {
  position: absolute;
  top: 0px;
  display: inline-block;
  pointer-events: none;
  width: 18px;
  height: 18px;
  margin-left: 0.5rem;
  border: 1px solid transparent;
  border-color: $bg-body;
  border-top-color: $color-primary;
  border-radius: 50%;
  animation: spin 1s, colour-wheel 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes spin {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

@keyframes colour-wheel {
  0% {
    border-top-color: $color-primary;
  }
  100% {
    border-top-color: $color-primary;
  }
}
</style>
