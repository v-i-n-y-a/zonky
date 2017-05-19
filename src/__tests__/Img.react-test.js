import React from 'react';
import Img from '../js/components/Img.js';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

describe('<Img  />', () => {
  it('Img without any properties', () => {
    const component = renderer.create(<Img />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Img with props should normal img tag', () => {
    const component = renderer
      .create(<Img src="test.jpg" alt="Test Image" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
