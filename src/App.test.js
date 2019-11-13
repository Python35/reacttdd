import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from './../utils';
import React from 'react';

const setUp = (initialState={}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />).childAt(0).dive();
  console.log(wrapper);
  return wrapper;
};

describe('App Component', () => {
  let wrapper;

  beforeEach(()=> {
    const initialState = {
      posts: [{
        title: 'test title',
        body: 'tetx'
      }, {
        title: 'test title',
        body: 'tetx', }]};
    wrapper = setUp(initialState);
  });

  it('should render without errors', () => {
    const component = findByTestAttr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });
});
