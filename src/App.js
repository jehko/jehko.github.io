import React from 'react';
import Navigation from './Components/Navigation'
import Summary from './Components/Summary'
import Profile from './Components/Profile'
import ProjectCard from './Components/ProjectCard'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Summary></Summary>
      <Profile></Profile>
      <ProjectCard></ProjectCard>
    </div>
  );
}

export default App;
