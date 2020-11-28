import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { findByTestAttribute } from './../../utils';

const setUp = (props = {}) => {
  return shallow(<Header { ...props }/>);
}

describe('Header Component', () => {
  let component;
  // Runs before every single test:
  beforeEach(() => {
    component = setUp();
  });

  it('renders without errors', () => {
    // HTML code output:
    // console.log(component.debug());

    // data-test is used for the other developers to know the importance of a class:
    const header = findByTestAttribute(component, 'header');
    expect(header.length).toBe(1);
  });

  it('renders a logo', () => {
    const logo = component.find('h4');
    expect(logo.length).toBe(1);
  });
});
