import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ImperialTracker from './ImperialTracker';
import MissionLog from './MissionLog';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const rce = React.createElement;

function App() {
  const [missionLog, setMissionLog] = useState({});
  const [imperialTracker, setImperialTracker] = useState({});

  useEffect(() => {
    fetch('http://localhost:9000/testApi')
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setMissionLog(res.missionLog);
      setImperialTracker(res.imperialTracker);
    });
  }, []);

  missionLog.setMissionLog = setMissionLog;
  imperialTracker.setImperialTracker = setImperialTracker;
  return missionLog.missions ? rce('div', {className: 'App'},
    rce(MissionLog, missionLog),
    //rce(ImperialTracker, imperialTracker),
  ) : rce('span', null, 'Loading...');
}

export default App;
