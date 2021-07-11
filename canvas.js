window.addEventListener('load', () => {
	const canvas = document.querySelector('#canvas');
	const ctx = canvas.getContext('2d');
	console.log(canvas);

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
	// ctx.stroke()
	//* ------

  //* Arc / Circle
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
