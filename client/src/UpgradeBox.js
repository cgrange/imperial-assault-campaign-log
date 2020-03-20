import React from 'react';
import triangle from './images/triangle.svg';
import Checkbox from './Checkbox.js';

const rce = React.createElement;

/* props: 
* upgradeSteps,
* upgradeComplete,
* setUpgradeComplete
*/
function UpgradeBox(props) {
	return rce('span', {className: 'upgrade-box'},
		rce('img', {src: triangle}, null),
		rce('span', {className: 'cool-corners steps-and-check'}, 
			props.upgradeSteps,
			rce('div', {className: 'checkbox-wrapper'},
				rce(Checkbox, {checked: props.upgradeComplete, setChecked: props.setUpgradeComplete})
			)
		),
	)
}

export default UpgradeBox;