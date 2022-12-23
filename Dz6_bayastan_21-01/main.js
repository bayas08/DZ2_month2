const input = document.querySelector('#input')
const btn = document.querySelector('.btn')
const div = document.querySelector('.div')

const cos = () => {
    if (input.value.trim() === '') {
        return false
    }
    else {
        let one = []
        one.push(input.value)
        one.map((e) => {
            const h2 = document.createElement('h2')
            div.append(h2)
            h2.append(e, '-',e.split('').reverse().join())
        })
        input.value = ''
    }
}

btn.onclick = () => {
    cos()
}

input.onkeydown = (w) => {
    if (w.keyCode === 13) cos()
}