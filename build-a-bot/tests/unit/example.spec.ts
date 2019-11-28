import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HomePage from '@/components/HomePage.vue';

describe('HomePage.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HomePage, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
