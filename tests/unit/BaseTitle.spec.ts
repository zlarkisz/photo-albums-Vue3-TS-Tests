import { mount } from '@vue/test-utils';
import BaseTitle from '@/components/base/BaseTitle.vue';

test('check title slot', () => {
  const wrapper = mount(BaseTitle, {
    slots: {
      default: 'Base Title',
    },
  });
  const title = wrapper.get('.title');

  expect(title.text()).toBe('Base Title');
});

test('check title prop: level', () => {
  const wrapper = mount(BaseTitle, {
    props: {
      level: 3,
    },
  });

  expect(wrapper.find('h3').exists()).toBeTruthy();
});
