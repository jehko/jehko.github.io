import React from 'react';
import Navigation from './Components/Navigation'
import Summary from './Components/Summary'
import Profile from './Components/Profile'
import ProjectCard from './Components/ProjectCard'
import ProjectModal from './Components/ProjectModal'

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import './App.css';

let showModal = false;

function reducerModal(state = showModal, action) {
  console.log(action)
  if (action.type === "show") {
    state = true;
  } else {
    state = false;
  }
  return state;
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
      </div>
    </Provider>
  );
}

export default App;
