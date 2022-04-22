<template>
  <ul data-test="images-list"
      class="images"
  >
    <li v-for="item in images"
        :key="`image-${item.id}`"
        class="images__item"
        data-test="images-item"
        draggable
        @dragstart="startDrag($event, item)"
    >
      <BaseImage :image="item.name" />
    </li>
  </ul>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { defineComponent, computed } from 'vue';

import Image from '@/types/Image';

import BaseImage from '@/components/base/BaseImage.vue';

export default defineComponent({
  name: 'ImagesList',

  components: {
    BaseImage,
  },

  setup() {
    const store = useStore();
    const images = computed<Image[]>(() => store.state.imagesList);

    const startDrag = (evt: DragEvent, image: Image) => {
      if (evt.dataTransfer !== null) {
        evt.dataTransfer.dropEffect = 'move';
        evt.dataTransfer.effectAllowed = 'move';
        evt.dataTransfer.setData('imageId', JSON.stringify(image.id));
      }
    };

    return { images, startDrag };
  },
});
</script>

<style scoped lang="scss">
.images {
  &__item {
    height: 100px;
    width: 100px;

    &:not(:last-of-type) {
      margin-bottom: 20px;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
}

</style>
