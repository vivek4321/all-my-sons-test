import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Body } from './components/body/Body';
import {withRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default withRouter(App);
