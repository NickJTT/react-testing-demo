import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, testStore } from './utils';
import App from './App';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  // Using of .childAt(0).dive() is nessesary because of react-redux
  const wrapper = shallow(<App store = { store }/>).childAt(0).dive();
  return wrapper;
}

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [{
        id: 1,
        title: 'Example Title 1',
        body: 'Some Text 1'
      },{
        id: 2,
        title: 'Example Title 2',
        body: 'Some Text 2'
      },{
        id: 3,
        title: 'Example Title 3',
        body: 'Some Text 3'
      }]
    }
    wrapper = setUp(initialState);
  });

  it('renders without errors', () => {
    const component = findByTestAttribute(wrapper, 'app');
    expect(component.length).toBe(1);
  });
});
