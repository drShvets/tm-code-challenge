import { shallowMount } from '@vue/test-utils';
import PlanetListPagination from './PlanetListPagination.vue';
import { VBtn } from 'vuetify/lib/components/index.mjs';
import { vuetify } from '@/vuetify/vuetity.config';
import { findComponentByAriaAttr } from '@/test/helpers';

describe('PlanetListPagination', () => {
  let wrapper;

  const createComponent = (props = {}) => {
    wrapper = shallowMount(PlanetListPagination, {
      props: {
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
        ...props
      },
      global: {
        plugins: [vuetify]
      }
    });
  };

  const findPreviousButton = () =>
    findComponentByAriaAttr(wrapper, VBtn, 'aria-label="Previous page"');
  const findNextButton = () => findComponentByAriaAttr(wrapper, VBtn, 'aria-label="Next page"');

  it('properly updates model value when clicking on "next" button', async () => {
    createComponent({
      modelValue: 5
    });

    findNextButton().trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('update:modelValue')).toEqual([[6]]);
  });

  it('properly updates model value when clicking on "previous" button', async () => {
    createComponent({
      modelValue: 5
    });

    findPreviousButton().trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('update:modelValue')).toEqual([[4]]);
  });

  it('passes "disabled" prop to "previous" button when on first page', () => {
    createComponent({
      modelValue: 1
    });

    expect(findPreviousButton().props('disabled')).toBe(true);
  });

  it('passes "disabled" prop to "next" button when on last page', () => {
    createComponent({
      modelValue: 5,
      hasNextPage: false
    });

    expect(findNextButton().props('disabled')).toBe(true);
  });
});
