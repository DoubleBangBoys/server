import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';


enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    const component = enzyme.shallow(<App />);
    expect(component).toHaveLength(1);
  });
});