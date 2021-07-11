window.addEventListener('load', () => {
	const canvas = document.querySelector('#canvas');
	const ctx = canvas.getContext('2d');

	//* Resizing
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	//* ------

	//* Rectangle
	// ctx.fillStyle = 'blue'
	// ctx.fillRect(50, 50, 50, 50)

	// ctx.lineWidth = 3
	// ctx.strokeStyle = 'aqua'
	// ctx.strokeRect(100, 100, 100, 100)

	// ctx.lineWidth = 1
	// ctx.strokeStyle = 'tomato'
	// ctx.strokeRect(150, 150, 150, 150)
	//* ------

	//* Line
	// ctx.beginPath()
	// ctx.moveTo(200, 400)
	// ctx.lineTo(200, 200)
	// ctx.lineTo(400, 100)
	// ctx.closePath()
	// ctx.strokeStyle = 'rgba(0, 255, 0, 1)'
	// ctx.stroke()
	//* ------

	//* Arc / Circle
	// ctx.beginPath()
	// ctx.arc(500, 200, 100, 0, Math.PI * 2, false)
	// ctx.strokeStyle = 'rgba(0, 0, 255, 1)'
	// ctx.stroke()
	//* ------

	//* Randomize multiple circles
	// for (let i = 0; i < 3; i++) {
	//   let x = Math.random() * window.innerWidth
	//   let y = Math.random() * window.innerHeight
	//   let color = Math.floor(Math.random() * 16777215).toString(16)

	//   ctx.beginPath()
	//   ctx.arc(x, y, 100, 0, Math.PI * 2, false)
	//   ctx.fillStyle = `#${color}`
	//   ctx.fill()
	// }
	//* ------

	//* Object
	class Circle {
		constructor(x, y, dx, dy, radius) {
			this.x = x;
			this.y = y;
			this.radius = radius;

			this.dx = dx;
			this.dy = dy;

			this.color = Math.floor(Math.random() * 16777215).toString(16);
		}

		draw() {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
			ctx.fillStyle = `#${this.color}`;
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

			this.draw();
		}
	}
	//* -----

	//* Animate

	var circleArray = [];
	for (let i = 0; i < 100; i++) {
		let radius = 30;
		let x = Math.random() * (innerWidth - radius * 2) + radius;
		let y = Math.random() * (innerHeight - radius * 2) + radius;
		let dx = Math.random() - 0.5;
		let dy = Math.random() - 0.5;

		circleArray.push(new Circle(x, y, dx, dy, radius));
	}

	function animate() {
		requestAnimationFrame(animate);

		ctx.clearRect(0, 0, innerWidth, innerHeight);
		circleArray.forEach((circle) => circle.update());
	}

	animate();
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
});
