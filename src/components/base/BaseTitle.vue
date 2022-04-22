<template>
  <component
    :is="tag"
    class="title"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'BaseTitle',

  props: {
    level: {
      type: [Number, String],
      default: 2,
    },
  },

  setup(props) {
    const tag = computed(() => `h${props.level || 2}`);

    return { tag };
  },
});
</script>

<style scoped lang="scss">
h1, h2, h3 {
  display: block;
  background-color: #ffc700;
  background-image: linear-gradient(0deg, #fabb40 0%, #ffebca 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-text-stroke: 1px #f90;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    text-shadow: 0 1px 1px rgba(#fff, 0.4), 0 4px 0 #c95e00;
    color: transparent;
    z-index: -1;
  }
}

h1 {
  font-size: 36px
}

h2 {
  font-size: 32px
}

h3 {
  font-size: 28px
}
</style>
