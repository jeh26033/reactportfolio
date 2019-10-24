import React, {Component} from 'react';
import './App.css';
import './particle.scss';
import Header from './components/layout/header.js';
import Sidebar from './components/layout/sidebar.js';
import FloatingJ from './components/layout/floatingj.js';
import MobileHeader from './components/layout/mobileHeader.js';
import { useMediaQuery } from 'react-responsive';
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

export default class App extends Component {

componentDidMount(){
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");

    var dots=[];
    var numDots = 50;
    var width = canvas.width;
    var height = canvas.height;
    var bounce = -1;
    for(var i=0 ; i<numDots ; i++){
      dots.push({
        x : Math.random() * width,
        y : Math.random() * height,
        vx : Math.random() * 10-5,
        vy : Math.random() * 10-5,
      })
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        var j, dot;
        for(j = 0; j < numDots; j++) {
            dot = dots[j];

            ctx.beginPath();
            ctx.arc(dot.x, dot.y, 3, 0, Math.PI * 2, true);
            ctx.fillStyle = "rgb("+
              Math.floor(Math.random()*256)+","+
              Math.floor(Math.random()*256)+","+
              Math.floor(Math.random()*256)+")";
            ctx.fill();
            //ctx.stroke();
        }
    }


    function update(){
      var i,dot;
      for( i=0 ; i< numDots ; i++){
        dot = dots[i];
        dot.x += dot.vx;
        dot.y += dot.vy;
        
        if(dot.x >width){
          dot.x = width;
          dot.vx *= bounce;
        }else if(dot.x <0){
          dot.x = 0;
          dot.vx *= bounce;
        }
        
        if(dot.y > height){
          dot.y = height;
          dot.vy *= bounce;
        }else if(dot.y<0){
          dot.y = 0;
          dot.vy *= bounce;
        }
      }
    }

    setInterval(function() {
        update();
        draw();
    }, 1000/124);
}

  render(){
    return (
      <Router>
        <div className = "App">
        <div className="animation-wrapper">
          <div className="gridContainer">
            <canvas id ="mycanvas" width="2560px" height="1200px"></canvas>
              <Mobile><MobileHeader /></Mobile>
              <Default><Header /></Default>
              <Default><Sidebar/></Default>
              <Default><FloatingJ/></Default>
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

