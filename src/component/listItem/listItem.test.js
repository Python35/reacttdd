import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../../../utils';
import ListItem from './index';

describe('ListItem Component', () => {
  describe('checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        title: 'Example Titile',
        desc: 'some text',
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('component renders', () => {
    let wrapper;
    beforeEach(()=> {
      const props = {
        title: 'Example Titile',
        desc: 'some text',
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it('should render without error', () => {

      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });

    it('should render a title', () => {

      const title = findByTestAttr(wrapper, 'componentTitle');
      expect(title.length).toBe(1);
    });

    it('should render a desc', () => {
      const desc = findByTestAttr(wrapper, 'componentDesc');
      expect(desc.length).toBe(1);
    });

  });

  describe('Should not render', () =>{
    let wrapper;
    beforeEach(()=> {
      const props = {
        desc: 'some text',
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it('should not render', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(0);
    });
  })
});
