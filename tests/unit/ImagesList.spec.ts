import { createStore } from 'vuex';
import { mount } from '@vue/test-utils';
import AlbumsList from '@/components/AlbumsList.vue';
import Album from '@/types/Album';
import Image from '@/types/Image';
import { CLEAR_ALBUM } from '@/store/mutations-types';

const store = createStore({
  state() {
    return {
      albumList: <Album[]>[
        {
          id: 1, title: 'FUN', color: 'yellow', images: [1],
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
    };
  },

  mutations: {
    [CLEAR_ALBUM](state: any, albumId: number) {
      const currentAlbum = state.albumList.find((album: Album) => album.id === albumId);

      if (currentAlbum && currentAlbum.images) {
        currentAlbum.images.length = 0;
      }
    },
  },
});

test('vuex using a mock store', () => {
  const wrapper = mount(AlbumsList, {
    global: {
      plugins: [store],
    },
  });

  expect(wrapper.findAll('[data-test="album-item"]').length).toEqual(3);
});

test('check images vount inside album', () => {
  const wrapper = mount(AlbumsList, {
    global: {
      plugins: [store],
    },
  });

  expect(wrapper.findAll('[data-test="album-image"]')).toBeTruthy();
  expect(wrapper.findAll('[data-test="album-image"]').length).toBe(1);
});

test('check images lenght if click nutton clear', async () => {
  const wrapper = mount(AlbumsList, {
    global: {
      plugins: [store],
    },
  });
  const button = wrapper.find('button');

  await button.trigger('click');

  expect(wrapper.findAll('[data-test="album-image"]')).toEqual([]);
  expect(wrapper.findAll('[data-test="album-image"]').length).toBeFalsy();
  expect(wrapper.findAll('[data-test="album-image"]').length).toBe(0);
});
