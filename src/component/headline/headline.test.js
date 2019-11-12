import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from './../../../utils';
import Headline from './index';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props}/>);
  return component;
};

describe('Headline Component', () => {
  describe('Have props', () => {
    let component;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc',
      };
      component = setUp(props);
    });
    it('it should render without errors', () => {
      const wrapper = findByTestAttr(component, 'HeadlineComponent');
      expect(wrapper.length).toBe(1);
    });

    it('it should render a h1', () => {
      const wrapper = findByTestAttr(component, 'header');
      expect(wrapper.length).toBe(1);
    });
    it('it should render a desc', () => {
      const wrapper = findByTestAttr(component, 'desc');
      expect(wrapper.length).toBe(1);
    });
  });

  describe('have no props', () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });

    it('it should not render ', () => {
      const wrapper = findByTestAttr(component, 'HeadlineComponent');
      expect(wrapper.length).toBe(0);
    });
  });
});
