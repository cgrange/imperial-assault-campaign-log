import React from 'react';
import MissionRow from './MissionRow';
import './MissionLog.scss';

const rce = React.createElement;

/* props
* state
*	missions
*	campaignName
*	finale
*	forcedMissions
* setState
*/
function MissionLog(props) {
	const missionLog = Object.assign({}, props.state);

	function handleMissionChange(idx, key, value) {
		missionLog.missions[idx][key] = value;
		console.log(missionLog);
		props.setState(missionLog);
	}

	const missionItems = missionLog.missions.map((mission, index) => {
		mission.index = index;
		mission.handleChange = handleMissionChange;
		return rce('li', {key: index}, rce(MissionRow, mission))
	});

	return rce('div', {className: 'mission-log'},
		rce('h1', {className: 'campaign-title'}, missionLog.campaignName, ' Campaign Log'),
		rce('div', {className: 'field-row'}, 
			rce('span', {id: 'mission-label'}, 'Mission'),
			rce('span', {id: 'threat-label'}, 'Threat Level'),
			rce('span', {id: 'rebel-upgrade-label'}, 'Rebel Upgrade'),
			rce('span', {id: 'imperial-upgrade-label'}, 'Imperial Upgrade'),
		),
		rce('ul', {className: 'mission-list'}, missionItems)
		//rce finale
		//rce ForcedMissions
	);
}

export default MissionLog;
