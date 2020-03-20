import React from 'react';
import Checkbox from './Checkbox.js';
import UpgradeBox from './UpgradeBox.js';
import './MissionRow.scss';

const rce = React.createElement;

/* props: 
*	type,
*	name,
*	threatLevel,
*	missionAccomplished,
*	itemTiers,
*	index,
*	handleChange,
*	rebelUpgradeComplete,
*	imperialUpgradeComplete
*/
function MissionRow(props) {
	function handleNameChange(event) {
		props.handleChange(props.index, 'name', event.target.value);
	}

	function setMissionAccomplished(missionAccomplished) {
		props.handleChange(props.index, 'missionAccomplished', missionAccomplished);
	}

	// TODO if the inline upgrade change works consider doing the other ones inline as well

	function printUpgradeSteps(itemTiers, rebels) {
		if(rebels) {
			let tiersStr = itemTiers.map((el, idx, arr) => {
				return idx === arr.length - 1 ? el : el + ' & ';
			}).join(' ');
			return 'Tier ' + tiersStr + ' Items, Spend XP';
		} else {
			return 'Agenda, Spend XP';
		}
	}
  
	return rce('div', {className: "mission-row"},
		rce('span', {className: 'cool-corners type-and-name-wrapper'}, 
			rce('span', {className: 'mission-type'}, props.type),
			rce('input', {className: 'mission-name', type: 'text', value: props.name, onChange: handleNameChange}, null),
		),
		rce('span', {className: 'threat-level'}, 
			props.threatLevel,
			rce('div', {className: 'checkbox-wrapper'},
				rce(Checkbox, {checked: props.missionAccomplished, setChecked: setMissionAccomplished}),
			)
		),
		rce(UpgradeBox, 
			{
				upgradeSteps: printUpgradeSteps(props.itemTiers, true),
				upgradeComplete: props.rebelUpgradeComplete, 
				setUpgradeComplete: (value) => props.handleChange(props.index, 'rebelUpgradeComplete', value)
			}
		),
		rce(UpgradeBox,
			{
				upgradeSteps: printUpgradeSteps(null, false),
				upgradeComplete: props.imperialUpgradeComplete,
				setUpgradeComplete: (value) => props.handleChange(props.index, 'imperialUpgradeComplete', value),
			}
		),
	)
}

export default MissionRow;