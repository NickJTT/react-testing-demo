import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, checkProps } from '../../utils';
import Post from './Post';

describe('Post Component', () => {
  describe('Checking PropTypes', () => {
    it('doesn\'t throw any warnings', () => {
      const props = { title: 'Title', description: 'Description' };
      const error = checkProps(Post, props);
      expect(error).toBeUndefined();
    });
  });

  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = { title: 'Title', description: 'Description' };
      wrapper = shallow(<Post { ...props }/>);
    });

    it('renders without errors', () => {
      const component = findByTestAttribute(wrapper, 'post');
      expect(component.length).toBe(1);
    });
  });

  describe('Component doesn\'t render', () => {
    let wrapper;
    beforeEach(() => {
      const props = { description: 'Description' };
      wrapper = shallow(<Post { ...props }/>);
    });

    it('doesn\'t render', () => {
      const component = findByTestAttribute(wrapper, 'post');
      expect(component.length).toBe(0);
    });
  });
});
