import React from 'react';
import {shallow} from 'enzyme';
import Feedback from './feedback';

describe('<Feedback/>', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback />);
  });

  it('Renders appropriate feedback', () => {
    let TEST = 'You are listening to a game!';
    const wrapper = shallow(<Feedback feedback={TEST} />);
    expect(wrapper.contains(TEST)).toEqual(true);
  });

});
