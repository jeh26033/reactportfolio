import React, {Component} from 'react';
import $ from 'jquery';
import '../particle.scss';


export default class Gyser extends Component {
  componentDidMount(){
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var ParticlesUnit = (function() {
  'use strict';
  var width, height,
      canvas, ctx,
      elements,
      button,
      balls;

  function init(size, cnvs, btn, elemsContainer) {
    width = size.width;
    height = size.height;
    canvas = cnvs;
    button = btn;
    elements = elemsContainer.children;
    balls = [];
    ctx = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = '#1d1f20';

    getBoundaries(elemsContainer);
    
    addBalls(40);
  }

  function render() {
    ctx.fillRect(0, 0, width, height);
    balls.forEach(updateBall);
  }

  function updateBall(ball) {
    var gravity;

    handleBoundaries(ball);

    ctx.save();
    ctx.translate(ball.x, ball.y);
    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc(0, 0, ball.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    ball.vy += ball.gravity;

    ball.x += ball.vx;
    ball.y += ball.vy;

  }

  function getBoundaries(container) {
    var i, len,
        elem, elemWidth, elemHeight,
        elemOffsetX, elemOffsetY;

    for (i = 0, len = elements.length; i < len; i += 1) {
      elem = elements[i];
      elemWidth = parseInt(window.getComputedStyle(elem).getPropertyValue('width'));
      elemHeight = parseInt(window.getComputedStyle(elem).getPropertyValue('height'));
      elemOffsetX = parseInt(window.getComputedStyle(elem).getPropertyValue('left'));
      elemOffsetY = parseInt(window.getComputedStyle(elem).getPropertyValue('top'));
      elem.computedWidth = elemWidth;
      elem.computedHeight = elemHeight;
      elem.offsets = {
        x: elemOffsetX,
        y: elemOffsetY
      }
    }
  }

  function handleBoundaries(ball) {
    var i, elem, len,
        bounce;


    for (i = 0, len = elements.length; i < len; i += 1) {

      elem = elements[i];

      bounce = 0.4;

      if (ball.y + ball.radius > elem.offsets.y && ball.y - ball.radius < elem.offsets.y + elem.computedHeight && ball.x > elem.offsets.x && ball.x < elem.offsets.x + elem.computedWidth ) {
        ball.y = elem.offsets.y - ball.radius;
        ball.vy *= -1;
        ball.vy *= bounce;
      }

      if (ball.y + ball.radius >= height) {
        if (ball.floorCounter === 0) {
          ball.y = height - ball.radius;
          ball.vy *= -1;
          ball.vy *= bounce;
          ball.floorCounter = 1;
          ball.color = '#e67e22';
        } else if (ball.floorCounter === 1) {
          balls.splice(1, ball)
        }
      }

      if (ball.x >= width || ball.x <= 0) balls.splice(1, ball);

    }


  }

  function addBalls(num) {
    var x,
        ball, yOffset,
        range,
        vxRange, 
        step;

    range = width / 1.3;
    vxRange = 7;
    step = 20 + Math.random() * 30;

    for (x = width / 2 - range / 2; x < width / 2 + range / 2; x += step) {
      yOffset = -Math.random() * 200 - 100;
      ball = {
        x: x,
        y: yOffset,
        vx: -vxRange / 2 + Math.random() * vxRange,
        vy: 0,
        gravity: 0.5 + Math.random() * 0.3,
        floorCounter: 0,
        radius: 8,
        color: '#2ecc71'
      };
      balls.push(ball);
    }
  }

  return {
    init: init,
    addBalls: addBalls,
    render: render
  }

}());
let container = this.refs.container;
let btn = this.ref.button;

console.log(btn)
console.log(container)

var size, canvas,
    elements;

size = { width: window.innerWidth, height: window.innerHeight };
canvas = document.querySelector('canvas');


ParticlesUnit.init(size, canvas, btn, container);



function mouseDown(e) {
  e.preventDefault();
  var num = Math.floor( Math.random() * 50 );
  ParticlesUnit.addBalls(num);
}

(function renderFrame() {
  window.requestAnimFrame(renderFrame);
  ParticlesUnit.render();
}());
}

   render() {
    return(
      <React.Fragment>
        <canvas></canvas>
        <div ref='container' >
  <a ref='button' href='#'>Click Me</a>
  <p>

    Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.

  </p>
  <p>
    Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.

  </p>
</div>
      </React.Fragment>
    );
    
  }
}


