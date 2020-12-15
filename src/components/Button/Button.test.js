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
    beforeEach(() => {
      const props = { buttonText: 'Example Button Text', emitEvent: () => {} };
      wrapper = shallow(<Button { ...props }/>);
    });
    it('renders a button', () => {
      const button = findByTestAttribute(wrapper, 'button');
      expect(button.length).toBe(1);
    });
  });
});
