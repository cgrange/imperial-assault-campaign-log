import React, { useState, useEffect } from 'react';
import './App.scss';
import ImperialTracker from './ImperialTracker';
import RebelTracker from './RebelTracker';
import MissionLog from './MissionLog';
// import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const rce = React.createElement;

function App() {
  const [missionLog, setMissionLog] = useState({});
  const missionLogProps = {state: missionLog, setState: setMissionLog};

  const [imperialTracker, setImperialTracker] = useState({});
  const imperialTrackerProps = {state: imperialTracker, setState: setImperialTracker};

  const [rebelTracker, setRebelTracker] = useState({});
  const rebelTrackerProps = {state: rebelTracker, setState: setRebelTracker};

  useEffect(() => {
    fetch('http://localhost:9000/testApi')
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setImperialTracker(res.imperialTracker);
      setRebelTracker(res.rebelTracker);
      setMissionLog(res.missionLog); // must set missionLog last since that's what is checked before rendering
    });
  }, []);

  return missionLog.missions ? rce('div', {className: 'App'},
    rce('div', {id: 'mission-log-wrapper'}, rce(MissionLog, missionLogProps)),
    rce('div', {id: 'trackers'}, 
      rce(ImperialTracker, imperialTrackerProps),
      rce(RebelTracker, rebelTrackerProps)  
    ),
  ) : rce('span', null, 'Loading...');
}

export default App;
