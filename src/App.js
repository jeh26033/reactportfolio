import React, {Component} from 'react';
import './App.css';
import Header from './components/layout/header.js';
import Sidebar from './components/layout/sidebar.js';
import FloatingJ from './components/layout/floatingj.js';
import MobileHeader from './components/layout/mobileHeader.js';

import { useMediaQuery } from 'react-responsive'
import { BrowserRouter as Router, Route } from 'react-router-dom';



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
 
function App() {
  return (
      <Router>
        <div className = "App">
          <div className="gridContainer">
            <Mobile><MobileHeader /></Mobile>
            <Default><Header /></Default>
            <><Sidebar/></>
            <Default><FloatingJ/></Default>
          </div>
        </div>
      </Router>
  );
}




export default App;
