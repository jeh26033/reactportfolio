import React, {Component} from 'react';
import background from './background.jpg'; 
import './App.css';

import Header from './components/layout/header.js';
import Sidebar from './components/layout/sidebar.js';
import Intro from './components/layout/intro.js'

import About from './components/pages/about.js';
import Work from './components/pages/work.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios'

function App() {
  return (
      <Router>
        <div className = "App">
          <div className="gridContainer">

            
            <Header />
            <Sidebar />
            <Route exact path="/" render={props => (
                
                  <Intro />

                
              )} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />

          </div>
        </div>
      </Router>
  );
}

export default App;
