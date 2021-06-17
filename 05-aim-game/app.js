const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeElem = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 0
let score = 0
let idInterval = null

startBtn.addEventListener('click', (e) => {
    e.preventDefault()
    screens[0].classList.add('up')
})

const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min)

const createRandomCircle = () => {
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const styleBoard = `width: ${size}px;height: ${size}px;top: ${y}px; left: ${x}px;background: #${randomColor}`

    board.innerHTML = `<div style='${styleBoard}' class="circle"></div>`
}

const finishGame = () => {
    timeElem.parentNode.classList.add('hide')
    board.innerHTML = `<div class="flex"><h1>Score: <span class="primary">${score}</span></h1><i style="font-size: 50px" class="fas fa-redo"></i></div>`

    const refreshElem = document.querySelector('.fa-redo')

    refreshElem.addEventListener('click', () => {
        refreshElem.style.transition = '0.5s ease-in'
        refreshElem.style.transform = 'rotate(165deg)'
        setTimeout(()=>screens[1].classList.remove('up'),600)
    })
    timeElem.parentNode.classList.remove('hide')
}

const setTime = value => timeElem.innerHTML = `00:${value}`

const decreaseTime = () => {
    if (time === 0) {
        clearInterval(idInterval)
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

const startGame = () => {
    idInterval = setInterval(decreaseTime, 1000)
    createRandomCircle()
    timeElem.innerHTML = `00:${time}`
}

timeList.addEventListener('click', (e) => {
    if (!e.target.classList.contains('time-btn')) return null;

    time = parseInt(e.target.textContent)
    screens[1].classList.add('up')
    startGame()
})

board.addEventListener('click', (e) => {
    if (e.target.classList.contains('circle')) {
        score++
        e.target.remove()
        createRandomCircle()
    }
})
