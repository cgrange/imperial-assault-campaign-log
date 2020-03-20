import React from 'react'
import Counter from './Counter';
import './ImperialTracker.scss';

const rce = React.createElement;
const agendaName = 'agenda-name';
const agendaTarget = 'agenda-target';

//TODO change step back to 1 for influence tracker (it's 2 for testing purposes)

/* props
* xp
* influence
* ongoingAgendas
* setImperialTracker
*/
function ImperialTracker(props) {
	const imperialTracker = JSON.parse(JSON.stringify(props.state));

	function handleAgendaRowChange(index, event) {
		const ongoingAgendas = imperialTracker.ongoingAgendas.slice();
		const target = event.target;

		if(target.className === agendaName) {
			ongoingAgendas[index].name = target.value;
		} else if (target.className === agendaTarget) {
			ongoingAgendas[index].target = target.value;
		} else {
			alert('we got problems in the Imperial Tracker element');
		}
		imperialTracker.ongoingAgendas = ongoingAgendas
		props.setState(imperialTracker);
	}

	function setXp(value) {
		imperialTracker.xp = value;
		props.setState(imperialTracker);
	}

	function setInfuence(value) {
		imperialTracker.influence = value;
		props.setState(imperialTracker);
	}

	console.log(imperialTracker);
	const ongoingAgendaList = imperialTracker.ongoingAgendas.map((item, idx) => {
		item.index = idx;
		item.handleChange = handleAgendaRowChange;
		return AgendaRow(item);
	});

	return rce('div', {className: 'imperial-tracker'},
		rce('h1', {className: 'title'}, 'Empire'),
		rce('div', {className: 'experience-tracker'},
			rce('h4', {className: 'header'}, 'Experience (XP)'),
			rce(Counter, {quantity: imperialTracker.xp, setQuantity: setXp, step: 1, min: 0})
		),
		rce('div', {className: 'influence-tracker'},
			rce('h4', {className: 'header'}, 'Influence'),
			rce(Counter, {quantity: imperialTracker.influence, setQuantity: setInfuence, step: 1, min: 0})
		),
		rce('div', {className: 'agenda-tracker'},
			rce('h4', {className: 'header'}, 'Ongoing Agendas'),
			rce('span', {className: 'agenda-label'}, 'Name'),
			rce('span', {className: 'agenda-label'}, 'Target'),
			rce('ul', {className: 'agenda-list'}, ongoingAgendaList)
		)
	)
}

/* props
* name
* target
* index
* handleChange
*/
function AgendaRow(props) {
	return rce('li', {className: 'agenda-row', key: props.index}, 
		rce('input', {
				type: 'text',
				className: agendaName,
				value: props.name,
				onChange: (e) => {props.handleChange(props.index, e)}
			}
		),
		rce('input', {
				type: 'text',
				className: agendaTarget,
				value: props.target,
				onChange: (e) => {props.handleChange(props.index, e)}
			}
		)
	)
}

export default ImperialTracker;
