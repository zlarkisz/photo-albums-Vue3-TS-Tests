<template>
  <main class="main">
    <BaseTitle :level="1"
               class="main__title"
    >
      Minions album
    </BaseTitle>

    <BaseImage image="main.jpeg"
               alt="minions"
               class="main__image"
    />

    <BaseTitle :level="2"
               class="main__subtitle"
    >
      Drag image to album
    </BaseTitle>

    <div class="main__wrap">
      <ImagesList />
      <AlbumsList />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseTitle from '@/components/base/BaseTitle.vue';
import BaseImage from '@/components/base/BaseImage.vue';
import AlbumsList from '@/components/AlbumsList.vue';
import ImagesList from '@/components/ImagesList.vue';

export default defineComponent({
  name: 'App',
  components: {
    BaseTitle,
    BaseImage,
    AlbumsList,
    ImagesList,
  },
});
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__image {
    height: 200px;
    margin-bottom: 20px;
  }

  &__wrap {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
