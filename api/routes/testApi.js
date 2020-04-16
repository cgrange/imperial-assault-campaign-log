const express = require('express');
const router = express.Router();

const mockData = {
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
			accomplished: false
		},
		forcedMissions: [
			{
				name: "No Rest for the Wicked",
				threatLevel: 3,
				accomplished: true
			},
		]
	},
	imperialTracker: {
		xp: 0,
		influence: 3,
		ongoingAgendas: [
			{
				name: 'High Bouty',
				target: 'Biv Bodhrik'
			},
			{
				name: 'No Escape',
				target: 'Garkan'
			},
			{
				name: 'All Too Easy',
				target: 'Diala Pasil'
			}
	    ]
	},
	rebelTracker: {
		credits: 350,
		characters: [
			{
				name: 'Biv Bodhrik',
				xp: 2
			},
			{
				name: 'Garkan',
				xp: 3
			},
			{
				name: 'Diala Pasil',
				xp: 1
			}
		]
	}
}

router.get('/', (req, res, next) => {
	res.json(mockData);
});

module.exports = router;