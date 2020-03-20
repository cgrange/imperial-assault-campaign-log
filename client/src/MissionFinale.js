import React from 'react';
import Checkbox from './Checkbox.js';
import halfCircle from './images/halfCircle.svg';

const rce = React.createElement;

/* props
* name
* threatLevel
* missionAccomplished
* ... (method(s) to handle changes to name and missionAccomplished)
*/
function MissionFinale(props) {
	return rce('div', {className: 'mission-finale'},
		rce('img', {src: halfCircle}),
		rce('div', {className: 'type-and-name-wrapper cool-corners'},
			rce('h3', {className: 'mission-type'}, 'FINALE'),
			rce('input', {className: 'mission-name', value: props.name, onChange: })
		),
		rce('div', {className: 'threat-level-wrapper'},
			rce('h5', {className: 'threat-level-label'}, 'THREAT LEVEL'),
			rce('div', {className: 'threat-level'},
				props.threatLevel,
				rce('div', {className: 'checkbox-wrapper'},
					rce(Checkbox, {checked: props.missionAccomplished, setChecked: }),
				)
			)
		)
	);
}

export default MissionFinale;