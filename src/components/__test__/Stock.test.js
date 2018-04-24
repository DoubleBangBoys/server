import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Stock from '../Stock';


enzyme.configure({ adapter: new Adapter() });

describe('<Stock />', () => {
  const component = enzyme.shallow(<Stock />);
  it('renders 1 <Stock /> component', () => {
    expect(component).toHaveLength(1);
  });
});
