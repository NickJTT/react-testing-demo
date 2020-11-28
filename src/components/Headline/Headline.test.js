import React from 'react';
import { shallow } from 'enzyme';
import Headline from './Headline';
import { findByTestAttribute } from './../../utils';

const setUp = (props = {}) => {
  return shallow(<Headline { ...props }/>);
}

describe('Headline Component', () => {
  describe('has props', () => {

    let component
    beforeEach(() => {
      component = setUp({ header: 'Test Header', description: 'Test Description' });
    });

    it('renders without errors', () => {
      const headline = findByTestAttribute(component, 'headline');
      expect(headline.length).toBe(1);
    });

    it('renders header', () => {
      const header = component.find('h1');
      expect(header.length).toBe(1);
    });

    it('renders description', () => {
      const paragraph = component.find('p');
      expect(paragraph.length).toBe(1);
    });
  });

  describe('has no props', () => {
    let component
    beforeEach(() => {
      component = setUp();
    });

    it('doesn\'t render', () => {
      const headline = findByTestAttribute(component, 'headline');
      expect(headline.length).toBe(0);
    });
  });
});
