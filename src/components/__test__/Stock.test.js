import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Stock from '../Stock';


enzyme.configure({ adapter: new Adapter() });

describe('<Stock />', () => {
  it('renders 1 <Stock /> component', () => {
    const component = enzyme.shallow(<Stock />);
    expect(component).toHaveLength(1);
  });
});