import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, checkProps } from '../../utils';
import Button from './Button';

describe('The Button Component', () => {
  describe('Checking PropTypes', () => {
    it('doesn\'t throw any warnings', () => {
      const expectedProps = { buttonText: 'Example Button Text', emitEvent: () => {} };
      const propsError = checkProps(Button, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    let mockFunction;
    beforeEach(() => {
      mockFunction = jest.fn();
      const props = { buttonText: 'Example Button Text', emitEvent: mockFunction };
      wrapper = shallow(<Button { ...props }/>);
    });

    it('renders a button', () => {
      const button = findByTestAttribute(wrapper, 'button');
      expect(button.length).toBe(1);
    });

    it('emits callback on click event', () => {
      const button = findByTestAttribute(wrapper, 'button');
      // The .simulate() method from Jest allows us to simulate an event:
      button.simulate('click');
      const callback = mockFunction.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
