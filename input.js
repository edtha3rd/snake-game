let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: -1 }
      break
    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: 1 }
      break
    case 'ArrowLeft':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: -1, y: 0 }
      break
    case 'ArrowRight':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y: 0 }
      break
  }
})

var upButton = document.getElementById('up')
upButton.addEventListener('touchstart', up)

var downButton = document.getElementById('down')
downButton.addEventListener('touchstart', down)

var leftButton = document.getElementById('left')
leftButton.addEventListener('touchstart', left)

var rightButton = document.getElementById('right')
rightButton.addEventListener('touchstart', right)

function up() {
  if (lastInputDirection.y !== 0) return
  inputDirection = { x: 0, y: -1 }
}

function down() {
  if (lastInputDirection.y !== 0) return
  inputDirection = { x: 0, y: 1 }
}

function right() {
  if (lastInputDirection.x !== 0) return
  inputDirection = { x: 1, y: 0 }
}

function left() {
  if (lastInputDirection.x !== 0) return
  inputDirection = { x: -1, y: 0 }
}

export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}
