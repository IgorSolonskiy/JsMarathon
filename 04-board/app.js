const board = document.querySelector('#board')
const SQUARES_NUMBER = 500

const removeColor = elem => {
    elem.style.backgroundColor = '#1d1d1d'
    elem.style.boxShadow = '0 0 2px #000'
}

const setColor = elem => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    elem.style.backgroundColor = `#${randomColor}`
    elem.style.boxShadow = `0 0 2px #${randomColor}, 0 0 10px #${randomColor}`
    board.style.border = `2px solid #${randomColor}`
    board.style.boxShadow = `0 0 2px #${randomColor}, 0 0 10px #${randomColor}`
}


Array(SQUARES_NUMBER).fill(1).forEach(() => {
    const square = document.createElement('div')

    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square)
})