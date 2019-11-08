import React, {Component} from 'react';
import $ from 'jquery';
import '../particle.scss';


export default class Gyser extends Component {
  componentDidMount(){
let canvas = document.querySelector('canvas')
let c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let gravity = .4,
    friction = 0

let ballsArr = []

window.onresize = e => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  init()
}

canvas.onclick = e => init()

function init () {
  ballsArr = []
  for (let i = 0; i < 140; i++) {
    let radius = 5 + Math.random() * 41,
        x = Math.max(radius, Math.min(canvas.width * Math.random() - radius, canvas.width - radius)),
        y = Math.random() * (canvas.height - 300),
        dx = (Math.random() - 0.5) * 4,
        dy = 2,
        color = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`,
        stroke = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`

    ballsArr.push(new Ball (x, y, dx, dy, radius, color, stroke))
  }
}

function animate () {
  window.requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  for (let i = 0; i < ballsArr.length; i++) {
    ballsArr[i].update()
  }
}

class Ball {
  constructor (x, y, dx, dy, radius, color, stroke) {
    this._x = x
    this._y = y
    this._dx = dx
    this._dy = dy
    this._radius = radius
    this._color = color
    this._stroke = stroke
  }

  draw () {
    c.beginPath()
    c.arc(this._x, this._y, this._radius, 0, Math.PI * 2)
    c.fillStyle = this._color
    c.strokeStyle = this._stroke
    c.fill()
    c.stroke()
    c.closePath()
  }

  update () {
    if (this._y + this._radius + this._dy > canvas.height) {
      this._dy = -this._dy * friction
      this._dx = this._dx * friction
    }
    else this._dy += gravity

    if (this._x + this._radius > canvas.width || this._x - this._radius < 0) this._dx = -this._dx

    this._y += this._dy
    this._x += this._dx
    this.draw()
  }
}

init()
animate()
}

   render() {
    return(
      <React.Fragment>
        <canvas></canvas>
      </React.Fragment>
    );
    
  }
}


