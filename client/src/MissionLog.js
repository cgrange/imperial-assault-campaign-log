import React, { useState } from 'react';
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

/*
missionLog: {
		campaignName: 'Red October Standing By',
		missions: [
			{
				type: 'Introduction',
				name: 'a dark omen',
				threatLevel: 2,
				accomplished: true,
				itemTiers: [1],
				rebelUpgradeComplete: true,
				imperialUpgradeComplete: true
			},
			{
				type: 'Side Mission',
				name: 'Round \'Um Up',
				threatLevel: 2,
				accomplished: true,
				itemTiers: [1],
				rebelUpgradeComplete: true,
				imperialUpgradeComplete: true
			},
			{
				type: 'Story Mission',
				name: 'Light the Beacon',
				threatLevel: 3,
				accomplished: true,
				itemTiers: [1],
				rebelUpgradeComplete: true,
				imperialUpgradeComplete: true
			},
			{
				type: 'Side Mission',
				name: 'Sabotage Shipyard',
				threatLevel: 3,
				accomplished: true,
				itemTiers: [1, 2],
				rebelUpgradeComplete: true,
				imperialUpgradeComplete: false
			},
			{
				type: 'Side Mission',
				name: 'Clear the Landing Pad',
				threatLevel: 4,
				accomplished: false,
				itemTiers: [2],
				rebelUpgradeComplete: false,
				imperialUpgradeComplete: false
			},
			{
				type: 'Story Mission',
				name: 'Catch a Mole',
				threatLevel: 4,
				accomplished: false,
				itemTiers: [2],
				rebelUpgradeComplete: false,
				imperialUpgradeComplete: false
			},
			{
				type: 'Side Mission',
				name: 'Complete Your Training',
				threatLevel: 5,
				accomplished: false,
				itemTiers: [2, 3],
				rebelUpgradeComplete: false,
				imperialUpgradeComplete: false
			},
			{
				type: 'Side Mission',
				name: 'Learn on the Job',
				threatLevel: 5,
				accomplished: false,
				itemTiers: [3],
				rebelUpgradeComplete: false,
				imperialUpgradeComplete: false
			},
			{
				type: 'Story Mission',
				name: 'Back to Basics',
				threatLevel: 6,
				accomplished: false,
				itemTiers: [3],
				rebelUpgradeComplete: false,
				imperialUpgradeComplete: false
			},
	    ],
		finale: {
			name: 'Our Last Hope',
			threatLevel: 3,
			missionAccomplished: false
		},
		forcedMissions: [
			{
				name: "No Rest for the Wicked",
				threatLevel: 3,
				missionAccomplished: true
			},
		]
	}
	*/