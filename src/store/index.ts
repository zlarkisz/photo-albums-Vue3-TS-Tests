import { createStore } from 'vuex';
import Album from '@/types/Album';
import Image from '@/types/Image';
import Payload from '@/types/Payload';
import { SAVE_IMAGE_TO_ALBUM, SET_IMAGE_TO_ALBUM, CLEAR_ALBUM } from './mutations-types';

export default createStore({
  state: {
    albumList: <Album[]>[
      {
        id: 1, title: 'FUN', color: 'yellow', images: [],
      },
      {
        id: 2, title: 'COOL', color: 'crimson', images: [],
      },
      {
        id: 3, title: 'SAD', color: 'darkslateblue', images: [],
      },
    ],

    imagesList: <Image[]>[
      { id: 1, name: 'bali.jpeg' },
      { id: 2, name: 'bond.jpeg' },
      { id: 3, name: 'king.jpeg' },
      { id: 4, name: 'kozaks.jpeg' },
      { id: 5, name: 'trio.jpeg' },
    ],
  },

  getters: {
  },

  mutations: {
    [SET_IMAGE_TO_ALBUM](state, payload: Payload) {
      const currentAlbum = state.albumList.find((el) => el.id === payload.albumId);
      const isImageInclude = state.albumList.find((el) => el.images.includes(payload.imageId));

      if (!isImageInclude) {
        currentAlbum?.images.push(payload.imageId);
      } else if (isImageInclude) {
        const albumContainingImage = state.albumList.find((el) => isImageInclude.id === el.id);
        const currentImageIndex = albumContainingImage?.images.indexOf(payload.imageId);

        albumContainingImage?.images.splice(Number(currentImageIndex), 1);

        currentAlbum?.images.push(payload.imageId);
      }
    },

    [CLEAR_ALBUM](state, albumId: number) {
      const currentAlbum = state.albumList.find((album) => album.id === albumId);

      if (currentAlbum && currentAlbum.images) {
        currentAlbum.images.length = 0;
      }
    },
  },

  actions: {
    async [SAVE_IMAGE_TO_ALBUM]({ commit }, payload: Payload) {
      try {
        const promise = new Promise((resolve) => {
          setTimeout(() => {
            resolve(payload);
          }, 1000);
        });
        const data = await promise;

        commit(SET_IMAGE_TO_ALBUM, data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {
  },
});
