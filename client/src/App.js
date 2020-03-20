import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import ImperialTracker from './ImperialTracker';
import MissionLog from './MissionLog';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const rce = React.createElement;

function App() {
  const [missionLog, setMissionLog] = useState({});
  const missionLogProps = {state: missionLog, setState: setMissionLog};
  const [imperialTracker, setImperialTracker] = useState({});
  const imperialTrackerProps = {state: imperialTracker, setState: setImperialTracker};

  useEffect(() => {
    fetch('http://localhost:9000/testApi')
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setImperialTracker(res.imperialTracker);
      setMissionLog(res.missionLog); // must set missionLog last since that's what is checked before rendering
    });
  }, []);

  return missionLog.missions ? rce('div', {className: 'App'},
    rce('div', {id: 'mission-log-wrapper'}, rce(MissionLog, missionLogProps)),
    rce('div', {id: 'imperial-tracker-wrapper'}, rce(ImperialTracker, imperialTrackerProps)),
  ) : rce('span', null, 'Loading...');
}

export default App;
