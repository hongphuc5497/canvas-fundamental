const ctx = canvas.getContext('2d');

export function drawLine() {
  ctx.beginPath()
  ctx.moveTo(200, 400)
  ctx.lineTo(200, 200)
  ctx.lineTo(400, 100)
  ctx.closePath()

  ctx.strokeStyle = 'rgba(0, 255, 0, 1)'
  ctx.stroke()
}