import React, {Component} from 'react';
import $ from 'jquery';
import '../particle.scss';


export default class Gyser extends Component {
  //componentDidMount(){
    // let canvas = document.querySelector('canvas')
    // let c = canvas.getContext('2d')

    // canvas.width = window.innerWidth
    // canvas.height = window.innerHeight

    // let gravity = 0.2,
    //     friction = 0.5

    // let ballsArr = []

    // window.onresize = e => {
    //   canvas.width = window.innerWidth
    //   canvas.height = window.innerHeight
    //   init()
    // }

    // canvas.onclick = e => init()

    // function init () {
    //   ballsArr = []
    //   for (let i = 0; i < 140; i++) {
    //     let radius = 5 + Math.random() * 41,
    //         x = Math.max(radius, Math.min(canvas.width * Math.random() - radius, canvas.width - radius)),
    //         y = Math.random() * (canvas.height - 300),
    //         dx = (Math.random() - 0.5) * 4,
    //         dy = 2,
    //         color = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`,
    //         stroke = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`

    //     ballsArr.push(new Ball (x, y, dx, dy, radius, color, stroke))
    //   }
    // }

    // function animate () {
    //   window.requestAnimationFrame(animate)
    //   c.clearRect(0, 0, canvas.width, canvas.height)
    //   for (let i = 0; i < ballsArr.length; i++) {
    //     ballsArr[i].update()
    //   }
    // }

    // class Ball {
    //   constructor (x, y, dx, dy, radius, color, stroke) {
    //     this._x = x
    //     this._y = y
    //     this._dx = dx
    //     this._dy = dy
    //     this._radius = radius
    //     this._color = color

    //   }

    //   draw () {
    //     c.beginPath()
    //     c.arc(this._x, this._y, this._radius, 0, Math.PI * 2)
    //     c.fillStyle = this._color
    //     c.strokeStyle = this._stroke
    //     c.fill()
    //     c.stroke()
    //     c.closePath()
    //   }

    //   update () {
    //     if (this._y + this._radius + this._dy > canvas.height) {
    //       this._dy = -this._dy * friction
    //       this._dx = this._dx * friction
    //     }
    //     else this._dy += gravity

    //     if (this._x + this._radius > canvas.width || this._x - this._radius < 0) this._dx = -this._dx

    //     this._y += this._dy
    //     this._x += this._dx
    //     this.draw()
    //   }
    // }

    // init()
    // animate()
  //}

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

    ctx.fillStyle = '#123';

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
      console.log('computated width', elem.computedWidth);
      console.log('computated height', elem.computedHeight);

      elem.offsets = {
        x: elemOffsetX,
        y: elemOffsetY
      }
      console.log('computated left', elem.offsets);
      console.log('computated top', elemOffsetY);
      console.log('element', elem);
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
          ball.vy *= -2;
          ball.vy *= bounce;
          ball.floorCounter = 1;
          ball.color = '#6610f2';
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
        radius:16,
        color: '#6f42c1'
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


var size, canvas,
    elements;

size = { width: window.innerWidth, height: window.innerHeight };
console.log('size',size)


canvas = document.querySelector('canvas');
console.log('canvas',canvas)


let btn = this.refs.btn;
console.log('btn', btn)


let container = this.refs.container;
console.log('container', container)

ParticlesUnit.init(size, canvas, btn, container);

btn.addEventListener('mousedown', mouseDown, false);

function mouseDown(e) {
  e.preventDefault();
  var num = Math.floor( Math.random() * 150 );
  ParticlesUnit.addBalls(num);
}

// setInterval(() => {
//   console.log('Interval triggered');
//   let num = 4;
//   ParticlesUnit.addBalls(num);
// }, 600);

(function renderFrame() {
  window.requestAnimFrame(renderFrame);
  ParticlesUnit.render();
}());
  }

   render() {

    return(
      <React.Fragment>
        <canvas className="canvasContainer" ></canvas>

        <div ref="container" className={"intro"} id='containerParticles'>
      
          <span><h1 ref="btn" href='#' style={largeText} className= "largeText">{`.joseph{`}</h1></span>
          <div className="introSubText"><p style={notAsLargeText}>web-developer;</p>
          <p style={evenSmallerText}>front-end-developer;<br/> web-designer; <br/>freelancer;<br/>hot-pocket-connoisseur;</p></div>
          <h1 style={largeText} className= "largeText">{`}`}</h1>
        </div>
   
      </React.Fragment>
    );
    
  }
}




const largeText = {
  textShadow:'1px 10px 2px purple',
  fontSize:'12em',
  textAlign:'',
  fontWeight:'bold',
}

const notAsLargeText = {
  textShadow:'1px 4px 2px purple',
  fontSize:'3em',
  fontWeight:'bold',
  color:'#9E9E9E'
}

const evenSmallerText = {
  
  fontSize:'1em',
  fontWeight:'bold',
  color:'#fff'
}