import React, {Component} from 'react';
import background from './background.jpg'; 
import './App.css';
import Header from './components/layout/header.js';
import About from './components/pages/about.js';
import Work from './components/pages/work.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios'

function App() {
  return (
      <Router>
        <div className = "App">
          <div className="gridContainer">
            <div id="gridHeader" className=''>
              <Header className="knockout" />
            </div>
            <div id="gridItem2" className="">
              <span className="sideBarText">.find-me</span>
              <ul className="sideBarLinks">
                <li className="list1">LinkedIn </li>
                <li className="list2">josephharskamp@gmail.com </li>
                <li className="list3">github </li>
              </ul>
            </div>
            <Route exact path="/" render={props => (
                <React.Fragment className="intro">
                    <div id="gridItemA" className="">
                      <h1 className="knockout">.joseph</h1>
                    </div>
                    <div id="gridItemB" className="">
                      <h1 className="knockout"></h1>
                    </div>
                </React.Fragment>
              )} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />

          </div>
        </div>
      </Router>
  );
}

export default App;
