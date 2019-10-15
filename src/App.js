import React, {Component} from 'react';
import './App.css';

import Header from './components/layout/header.js';
import Sidebar from './components/layout/sidebar.js';


import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
      <Router>
        <div className = "App">
          <div className="gridContainer">
            <Header />
            <Sidebar />
          </div>
        </div>
      </Router>
  );
}


export default App;
