import { createRect } from './javascript/rectangle.mjs';
import { drawLine } from './javascript/line.mjs';
import { multipleCircles } from './javascript/circle.mjs';
import { animate, initCircles } from './javascript/bouncing_circles.mjs';

// Clear circles, set array to empty
document.getElementById('buttonCanvas').onclick = () => {
	ctx.clearRect(0, 0, innerWidth, innerHeight);
	circles = [];
};

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Resizing
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Event listeners
window.addEventListener('mousemove', move);
window.addEventListener('mousedown', setDraggable);
window.addEventListener('mouseup', setDraggable);

// Object
class Circle {
	constructor(x, y, radius, fill) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.fill = fill;
	}

	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx.fillStyle = this.fill;
		ctx.fill();
	}
}

// Variables
var isMouseDown, circleMouseDown;
var circles = [];
var mousePosition = {
	x: undefined,
	y: undefined,
};
var focused = {
	key: 0,
	state: false,
};
var maxCircle = 5

// Handling functions
function setDraggable(e) {
	if (e.type === 'mousedown') {
		isMouseDown = true;
		if (circles.length < maxCircle) {
			circleMouseDown = new Circle(e.clientX, e.clientY, 30, '#548CA8');
			circles.push(circleMouseDown);
		}
	} else if (e.type === 'mouseup') {
		circleMouseDown = null;
		isMouseDown = false;
		focused.state = false;
	}
}

function initCircle(e) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
  circles.forEach((circle) => {
    circle.draw()
    console.log(ctx.isPointInPath(e.x, e.y))
  });
}

function move(e) {
	if (!isMouseDown) return;

  getMousePosition(e)

	if (focused.state) {
		circles[focused.key].x = mousePosition.x;
    circles[focused.key].y = mousePosition.y;
		initCircle(e);
		return;
	}

	for (var i = 0; i < circles.length; i++) {
		if (intersects(circles[i])) {
			circles.move(i, 0);
			focused.state = true;
			break;
		}
  }

	initCircle(e);
}

function getMousePosition(e) {
  var rect = canvas.getBoundingClientRect();
  mousePosition = {
      x: e.x - rect.left,
      y: e.y - rect.top
  }
}

function intersects(circle) {
	var areaX = mousePosition.x - circle.x;
	var areaY = mousePosition.y - circle.y;

	return (
		Math.pow(areaX, 2) + Math.pow(areaY, 2) <= circle.radius * circle.radius
	);
}

Array.prototype.move = function (old_index, new_index) {
	if (new_index >= this.length) {
		var k = new_index - this.length;
		while (k-- + 1) {
			this.push(undefined);
		}
	}
	this.splice(new_index, 0, this.splice(old_index, 1)[0]);
};
