
import { createRect } from './javascript/rectangle.mjs'
import { drawLine } from './javascript/line.mjs'
import { multipleCircles } from './javascript/circle.mjs'
import { animate, initCircles } from './javascript/bouncing_circles.mjs'

//* Resizing
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
//* ------

//* Rectangle
// createRect()
//* ------

//* Line
// drawLine()
//* ------

//* Arc / Circle
// multipleCircles()
//* ------

//* Arc / Circle
initCircles()
animate()
//* ------

// Variables
// let painting = false

// Functions
// function startPosition(e) {
//   painting = true
//   draw(e)
// }

// function finishedPosition() {
//   painting = false
//   ctx.beginPath()
// }

// function draw(e) {
//   if (!painting) return;

//   ctx.lineWidth = 5
//   ctx.lineCap = 'round'
//   ctx.strokeStyle = 'aqua'

//   ctx.lineTo(e.clientX, e.clientY)
//   ctx.stroke()
//   ctx.beginPath()
//   ctx.moveTo(e.clientX, e.clientY)
// }

// Event Listeners
// window.addEventListener('mousedown', startPosition)
// window.addEventListener('mouseup', finishedPosition)
// window.addEventListener('mousemove', draw)

