import React, {Component} from 'react';
import './App.css';
import './particle.scss';
import Header from './components/layout/header.js';
import Sidebar from './components/layout/sidebar.js';
import FloatingJ from './components/layout/floatingj.js';
import MobileHeader from './components/layout/mobileHeader.js';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import $ from 'jquery';

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

componentDidMount(){
  let canvas = document.getElementById("mycanvas");
  let ctx = canvas.getContext("2d");
  let d = document, $d = $(d),
      w = window, $w = $(w),
      wWidth = $w.width(), wHeight = $w.height(),
      credit = $('.credit > a'),
      particles = $('.particles'),
      particleCount = 0,
      sizes = [
        15, 20, 25, 35, 45
      ],
      colors = [
        '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
        '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
        '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
        '#FF5722', '#795548', '#9E9E9E', '#607D8B', '#777777'
      ],
      mouseX = $w.width() / 2, 
      mouseY = $w.height() / 2;
      
  $w.on( 'resize' , function () {
    wWidth = $w.width();
    wHeight = $w.height();
  });

  //start the party
  $d.on( 'mousemove touchmove' , function ( event ) {
    event.preventDefault();
    event.stopPropagation();
    mouseX = event.clientX;
    mouseY = event.clientY;
    if( !!event.originalEvent.touches ) {
      mouseX = event.originalEvent.touches[0].clientX;
      mouseY = event.originalEvent.touches[0].clientY;
    }
  })
  .on( 'mousedown touchstart' , function( event ) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    if( !!event.originalEvent.touches ) {
      mouseX = event.originalEvent.touches[0].clientX;
      mouseY = event.originalEvent.touches[0].clientY;
    }

    //ends the spew of particles
    let timer = setInterval(function () {
      $d.one('mouseup mouseleave touchend touchcancel touchleave', function () {
        clearInterval(timer);
      })
      createParticle(event);
    }, 1000 / 60)
    
  });


  function createParticle ( event ) {
    let particle = $('<div class="particle"/>'),
        size = sizes[Math.floor(Math.random() * sizes.length)],
        color = colors[Math.floor(Math.random() * colors.length)],
        negative = size/2,
        speedHorz = Math.random() * 10,
        speedUp = Math.random() * 25,
        spinVal = 360 * Math.random(),
        spinSpeed = ((36 * Math.random())) * (Math.random() <=.5 ? -1 : 1),
        otime,
        time = otime = (1 + (.5 * Math.random())) * 1000,
        top = (mouseY - negative),
        left = (mouseX - negative),
        direction = Math.random() <=.5 ? -1 : 1 ,
        life = 10;
    
    particle
    .css({
      height: size + 'px',
      width: size + 'px',
      top: top + 'px',
      left: left + 'px',
      background: color,
      transform: 'rotate(' + spinVal + 'deg)',
      webkitTransform: 'rotate(' + spinVal + 'deg)'
    })
    .appendTo( particles );
   
    let particleTimer = setInterval(function () {
      time = time - life;
      left = left - (speedHorz * direction);
      top = top - speedUp;
      speedUp = Math.min(size, speedUp - 1);
      spinVal = spinVal + spinSpeed;
      particle
      .css({
        height: size + 'px',
        width: size + 'px',
        top: top + 'px',
        left: left + 'px',
        opacity: ((time / otime)/2) + .25,
        transform: 'rotate(' + spinVal + 'deg)',
        webkitTransform: 'rotate(' + spinVal + 'deg)'
      });
      
      if( time <= 0 || left <= -size || left >= wWidth + size || top >= wHeight + size ) {
        particle.remove();
        
        clearInterval(particleTimer);
      }
    }, 1000 / 60);  
  }

}

  render(){
    return (
      <Router>
        <div className="App">
        <div  className="animation-wrapper">
          <div id="gridContainer" className="gridContainer">
            <canvas id ="mycanvas" width="2560px" height="1200px"></canvas>
              <Mobile><MobileHeader /></Mobile>
              <Default><Header /></Default>
              <Default><Sidebar/></Default>
              <Default><FloatingJ/></Default>
              <div className="particles"></div>
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
              <div className="particle particle-4"></div>
              <div className="particle particle-5"></div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

