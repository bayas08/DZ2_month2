// 1
const plus = document.querySelector('.button1')
const minus = document.querySelector('.button2')
const h2 = document.querySelector('.h2')
let i = 0;

plus.addEventListener('click', () => {
    i++
    if (i > 0){
        h2.innerText = i
        h2.style.color = 'blue'
    }
})
minus.addEventListener('click', () => {
    i--
    if(i >= 0){
        h2.innerText = i
        h2.style.color = 'red'
    }
})


//2
let coordinates = document.querySelector('.coordinates')
let x = document.querySelector('.x')
let y = document.querySelector('.y')


coordinates.addEventListener('mousemove' ,(e)=>{
    x.innerHTML = e.screenX
    y.innerHTML = e.screenY

})

// 3
let promp = prompt('введите цвет').toLowerCase().trim()
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

if (promp === 'красный' || promp === 'red') {
    alert('STOP')
    red.style.background = 'red'
} else if (promp === 'желтый' || promp === 'yellow') {
    yellow.style.background = 'yellow'
} else if (promp === 'зеленый' || promp === 'green') {
    green.style.background = 'green'
} else {
    alert('надо было ввести цвет')
}