import React from 'react';
import Navigation from './Components/Navigation'
import Summary from './Components/Summary'
import Profile from './Components/Profile'
import ProjectCard from './Components/ProjectCard'
import ProjectModal from './Components/ProjectModal'
import Contact from './Components/Contact'

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import projectData from './ProjectData.json';

import './App.css';

let modalState = { showModal: false };

function reducerModal(state = modalState, action) {
  if (action.type === "show") {
    let found = projectData.find((item) => { return item.id === action.payload.id});
    state = {showModal: true, ...found}
    console.log(state);
    return state;
  } else if (action.type === "hide"){
    state = {showModal: false}
    return state;
  } else {
    return state;
  }
  
}

let store = createStore(combineReducers({ reducerModal }))

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <Navigation></Navigation>
        <Summary></Summary>
        <Profile></Profile>
        <ProjectCard></ProjectCard>
        <ProjectModal></ProjectModal>
        <Contact></Contact>
      </div>
    </Provider>
  );
}

export default App;
