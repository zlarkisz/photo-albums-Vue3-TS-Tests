<template>
  <img :src="require(`@/assets/images/minions/${image}`)"
       alt="minion"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    image: {
      requrie: true,
      type: String,
    },
  },
});
</script>
