import React from 'react';
import './Checkbox.scss'

const rce = React.createElement;

/* props
* checked
* setChecked
*/
function Checkbox(props) {
	let className = props.checked ? 'checked' : '';
	return rce('div', 
		{
			className: className + " checkbox",
			onClick: () => {
				props.setChecked(!props.checked);
			}
		},
		null
	);
}

export default Checkbox;