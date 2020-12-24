import React from 'react';
import { shallow } from 'enzyme';
import Number from './Number';

describe('The Number Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Number/>);
  });

  it('the number state is equal to 0', () => {
    const component = wrapper.instance();
    const number = component.state.number;
    expect(number).toBe(0);
  });

  it('the getNumber() method returns a value', () => {
    const component = wrapper.instance();
    const number = component.getNumber();
    expect(number).toBe(1);
  });

  it('the setNumber() method sets the number properly', () => {
    const component = wrapper.instance();
    component.setNumber(1);
    const number = component.state.number;
    expect(number).toBe(1);
  });
});
