window.addEventListener('load', () => {
  const canvas = document.querySelector('#canvas')
  const ctx = canvas.getContext('2d')

  // Resizing
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth

  // Create shape
  // ctx.fillRect(50, 50, 50, 50)

  // ctx.strokeStyle = 'aqua'
  // ctx.lineWidth = 3
  // ctx.strokeRect(100, 100, 100, 100)

  // ctx.strokeStyle = 'tomato'
  // ctx.lineWidth = 1
  // ctx.strokeRect(150, 150, 150, 150)

  // Draw line
  // ctx.beginPath()
  // ctx.moveTo(400, 400)
  // ctx.lineTo(600, 400)
  // ctx.lineTo(500, 500)
  // ctx.closePath()
  // ctx.stroke()

  // Variables
  let painting = false

  // Functions
  function startPosition(e) {
    painting = true
    draw(e)
  }

  function finishedPosition() {
    painting = false
    ctx.beginPath()
  }

  function draw(e) {
    if (!painting) return;

    ctx.lineWidth = 5
    ctx.lineCap = 'round'
    ctx.strokeStyle = 'aqua'

    ctx.lineTo(e.clientX, e.clientY)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(e.clientX, e.clientY)
  }

  // Event Listeners
  window.addEventListener('mousedown', startPosition)
  window.addEventListener('mouseup', finishedPosition)
  window.addEventListener('mousemove', draw)
})