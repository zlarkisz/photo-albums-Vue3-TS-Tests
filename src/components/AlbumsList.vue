<template>
  <ul>
    <transition-group>
      <li v-for="album in albums"
          :key="`album-${album.id}`"
          :style="{ backgroundColor: album.color }"
          data-test="album-item"
          @drop="onDrop($event, album.id)"
          @dragenter.prevent
          @dragover.prevent
      >
        <BaseTitle :level="3">{{ album.title }}</BaseTitle>

        <div class="wrap">
          <div class="wrap__images">
            <TransitionGroup name="images">
              <BaseImage v-for="image in album.images"
                         :key="`album-image-${image}`"
                         :image="setImage(image)"
                         data-test="album-image"
              />
            </TransitionGroup>
          </div>

          <Transition name="fade">
            <button v-if="album.images.length"
                    class="style-1"
                    @click="clearAlbum(album.id)"
            >
              clear album
            </button>
          </Transition>
        </div>
      </li>
    </transition-group>
  </ul>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { defineComponent, computed } from 'vue';
import BaseTitle from '@/components/base/BaseTitle.vue';
import BaseImage from '@/components/base/BaseImage.vue';
import { SAVE_IMAGE_TO_ALBUM, CLEAR_ALBUM } from '@/store/mutations-types';
import Image from '@/types/Image';

export default defineComponent({
  name: 'AlbumsList',

  components: {
    BaseTitle,
    BaseImage,
  },

  setup() {
    const store = useStore();
    const albums = computed(() => store.state.albumList);
    const images = computed(() => store.state.imagesList);

    const onDrop = (evt: DragEvent, albumId: number) => {
      if (evt.dataTransfer !== null) {
        const imageId = evt.dataTransfer.getData('imageId');
        store.dispatch(SAVE_IMAGE_TO_ALBUM, { imageId: JSON.parse(imageId), albumId });
      }
    };

    const setImage = (id: number) => {
      const currentImage = images.value.find((img: Image) => img.id === id);
      return currentImage.name;
    };

    const clearAlbum = (id: number) => {
      store.commit(CLEAR_ALBUM, id);
    };

    return {
      albums, onDrop, setImage, clearAlbum,
    };
  },
});
</script>

<style scoped lang="scss">

ul {
  padding: 0;

  li {
    border-radius: 30px;
    list-style: none;
    height: max-content;
    width: 400px;
    padding: 15px 20px 30px;

    &:not(:last-of-type) {
      margin-bottom: 10px;
    }

    h3 {
      text-align: center
    }

    .wrap {
      display: flex;
      flex-direction: column;

      &__images {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
      }
    }

    img {
      height: 100px;
      width: 100px;
      object-fit: cover;
      border-radius: 50%;

      &:not(:last-of-type) {
        margin-right: 10px;
      }
    }
  }
}
</style>
