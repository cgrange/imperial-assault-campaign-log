import React from 'react';
import Counter from './Counter';

import './RebelTracker.scss';

const rce = React.createElement;

/* props
	state
		credits
		characters [
			{name: str, xp: num}, ...
		]
	setState
*/

function RebelTracker (props) {
	const rebelTracker = Object.assign({}, props.state);

	function setCredits(value) {
		rebelTracker.credits = value;
		props.setState(rebelTracker);
	}

	function setXp(index, xp) {
		rebelTracker.characters[index].xp = xp;
		props.setState(rebelTracker);
	}

	let rebels = rebelTracker.characters.map((character, index) => {
		return rce('li', {key: index},
			rce('div', {className: 'character-tracker'},
				rce('h4', {className: 'character-name'}, character.name, ' (xp)'),
				rce(Counter, {quantity: character.xp, setQuantity: (xp) => {setXp(index, xp)}, step: 1, min: 0})
			)
		)
	});
	
	return rce('div', {className: 'rebel-tracker'},
		rce('h1', {className: 'title'}, 'Rebels'),
		rce('div', {className: 'credits-tracker'}, 
			rce('h3', {className: 'credits-header'}, 'CREDITS:'),
			rce(Counter, {quantity: rebelTracker.credits, setQuantity: setCredits, step: 50, min: 0})
		),
		rce('ul', {className: 'rebels-list'},
			rebels
		),
	);
}

export default RebelTracker;

