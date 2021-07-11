const ctx = canvas.getContext('2d');

export function multipleCircles() {
  // Static circle
	ctx.beginPath();
	ctx.arc(500, 200, 100, 0, Math.PI * 2, false);
	ctx.strokeStyle = 'rgba(0, 0, 255, 1)';
	ctx.stroke();

  // Loop creating
	for (let i = 0; i < 3; i++) {
		let x = Math.random() * window.innerWidth;
		let y = Math.random() * window.innerHeight;
		let color = Math.floor(Math.random() * 16777215).toString(16);

		ctx.beginPath();
		ctx.arc(x, y, 100, 0, Math.PI * 2, false);
		ctx.fillStyle = `#${color}`;
		ctx.fill();
	}
}
