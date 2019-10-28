import React, {Component} from 'react';
import $ from 'jquery';
import '../particle.scss';


export default class Gyser extends Component {
  componentDidMount(){
    let canvas = document.getElementById("mycanvas");
    let ctx = canvas.getContext("2d");
    let d = document;
    let $d = $(d);
    let w = window;
    let $w = $(w);
    let windowWidth = $w.width();
    let windowHeight = $w.height();
    let particles = $('.particles'),
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
        windowWidth = $w.width();
        windowHeight = $w.height();
        console.log('resize')
      });

      //start the party
      $d.on('mousemove' , function ( event ) {
        event.preventDefault();
        event.stopPropagation();
        mouseX = event.clientX;
        mouseY = event.clientY;
      })
      .on('mousedown' , function( event ) {
        mouseX = event.clientX;
        mouseY = event.clientY;
        //starts the particle timer
        let timer = setInterval(function () {
          $d.on('mouseup mouseleave', function () {
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
            life = 1;
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
          
          if( time <= 0 || left <= -size || left >= windowWidth + size || top >= windowHeight + size ) {
            particle.remove();
            
            clearInterval(particleTimer);
          }
        }, 1000 / 60);  
      }
    }
   render() {
    return(
      <React.Fragment>
        <div className="particles"></div>
        <canvas id ="mycanvas" width="100%" height="100%"></canvas>
      </React.Fragment>
    );
    
  }
}


