const ctx = canvas.getContext('2d');

export function createRect() {
  ctx.fillStyle = 'blue'
	ctx.fillRect(50, 50, 50, 50)

	ctx.lineWidth = 3
	ctx.strokeStyle = 'aqua'
	ctx.strokeRect(100, 100, 100, 100)

	ctx.lineWidth = 1
	ctx.strokeStyle = 'tomato'
	ctx.strokeRect(150, 150, 150, 150)
}