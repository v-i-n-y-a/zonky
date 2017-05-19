import React from 'react';
import LoanView from '../js/components/LoanView.js';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import loanJSON from './loanJSON';

describe('<LoanView loan={loan} />', () => {
  it('LoanView renders correctly', () => {
    const component = renderer.create(<LoanView loan={loanJSON} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
