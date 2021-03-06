import React, {Component} from 'react';
import './App.css';
import './particle.scss';
import Header from './components/layout/header.js';
import Sidebar from './components/layout/sidebar.js';
import FloatingJ from './components/layout/floatingj.js';
import MobileHeader from './components/layout/mobileHeader.js';
import MobileSideBar from './components/layout/mobileSideBar.js';
import Gyser from './components/gyser.js';

import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TagManager from 'react-gtm-module'
import ReactGA from 'react-ga';


const tagManagerArgs = {
    gtmId: 'GTM-W87MG5C'
}

TagManager.initialize(tagManagerArgs);

function initializeReactGA() {
    ReactGA.initialize('UA-175792818-1');
    ReactGA.pageview('/');
}

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

export default class App extends Component {
  render(){
    return (

      <Router>
      
        <div className="App">
        <div  className="animation-wrapper">
          <div id="gridContainer" className="gridContainer">
             
              <Mobile><MobileHeader /></Mobile>
              <Mobile><MobileSideBar /></Mobile>
              <Default><Header /></Default>
              <Default><Sidebar/></Default>
              <Default><FloatingJ/></Default>
              <div className="particles"></div> 
              <div className="particle particle-1"></div>             
              <div className="particle particle-2"></div>              
              <div className="particle particle-3"></div>              

            </div>
          </div>
        </div>
      </Router>
    );
  }
}

