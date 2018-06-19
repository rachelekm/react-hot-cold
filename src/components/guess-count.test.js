import React from 'react';
import {shallow} from 'enzyme';
import GuessCount from './guess-count';

describe('<GuessCount/>', () => {
	it('Renders without crashing', () => {
		shallow(<GuessCount />);
	});

	it('Renders the correct amount of attempts', () => {
		let testGuess = 3;
		const wrapper = shallow(<GuessCount guessCount={testGuess} />);
		expect(wrapper.text()).toEqual(`You've made ${testGuess} guesses!`);
	});

});