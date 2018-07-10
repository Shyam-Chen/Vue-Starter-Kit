import { shallowMount } from '@vue/test-utils';

import Filters from '../Filters';

describe('Filters', () => {
  let [wrapper] = [];

  beforeEach(() => {
    wrapper = shallowMount(Filters);
    jest.spyOn(Date, 'now').mockImplementation(() => 1531192363503);
  });

  it('should render initial component', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
