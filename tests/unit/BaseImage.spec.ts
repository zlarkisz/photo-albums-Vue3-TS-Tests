import { mount } from '@vue/test-utils';
import BaseImage from '@/components/base/BaseImage.vue';

test('render img with prop image', () => {
  const wrapper = mount(BaseImage, {
    props: {
      image: 'trio.jpeg',
    },
  });

  expect(wrapper.find('img').exists()).toBe(true);
});
