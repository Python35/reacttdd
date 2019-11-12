/* jshint esversion: 6 */
import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttr } from './../../../utils/index';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props}/>);
  return component;
};

describe('Header Component', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('Render Header Comp', () => {
    const wrapper = findByTestAttr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Render Logo Img', () => {
    const wrapper = findByTestAttr(component, 'logoImg');
    expect(wrapper.length).toBe(1);
  });
});
