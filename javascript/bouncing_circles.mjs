const ctx = canvas.getContext('2d');

const mouse = {
	x: undefined,
	y: undefined,
};

//* Event listeners
window.addEventListener('mousemove', (e) => {
	mouse.x = e.clientX;
	mouse.y = e.clientY;
});

window.addEventListener('resize', (e) => {
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;

	initCircles();
});
//* ------

//* Object
class Circle {
	constructor(x, y, dx, dy, radius) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;

		this.radius = radius;
		this.minRadius = radius;
		this.maxRadius = 40;

		this.randomColor = Math.floor(Math.random() * 16777215).toString(16);
	}

	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.fillStyle = `#${this.randomColor}`;
		ctx.fill();
	}

	update() {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}

		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		// Interactivity
		let interactiveConditionX = mouse.x - this.x > -50 && mouse.x - this.x < 50;
		let interactiveConditionY = mouse.y - this.y > -50 && mouse.y - this.y < 50;

		if (interactiveConditionX && interactiveConditionY) {
			if (this.radius < this.maxRadius) {
				this.radius += 1;
			}
		} else if (this.radius > this.minRadius) {
			this.radius -= 1;
		}

		this.draw();
	}
}
//* -----

//* Randomize multiple circles with class
var circleArray = [];

export function initCircles() {
	circleArray = [];

  for (let i = 0; i < 1000; i++) {
    let radius = Math.round(Math.random() * 3);
		let x = Math.random() * (innerWidth - radius * 2) + radius;
		let y = Math.random() * (innerHeight - radius * 2) + radius;
		let dx = Math.random() - 0.5;
		let dy = Math.random() - 0.5;

		circleArray.push(new Circle(x, y, dx, dy, radius));
	}
}
//* ------

//* Animate
export function animate() {
	requestAnimationFrame(animate);

	ctx.clearRect(0, 0, innerWidth, innerHeight);
	circleArray.forEach((circle) => circle.update());
}
