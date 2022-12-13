// 1
let arrow = (c, d ) => {
    if (c < d){
        console.log('минимальное число,', c)
    } else if (d < c) {
        console.log('минимальное число,', d)
    } else if (c === d){
        console.log(c + 'и' + d + ' равны ')
    } else {
        console.log('error')
    }
}

arrow(99, 77)

// 2
let len =( arr = prompt('введите что нибудь')) => {
    return console.log(arr.length)
}
len()

// 3
let a = Number(prompt('введите первое число'));
let o = prompt('введите операцию');
let b = Number(prompt('введите второе число'));
let r = 'r';

let calc = (a, o, b, r) => {
    switch (o) {
        case '+':
            alert(r = a + b)
            break
        case '-':
            alert(r = a + b)
            break
        case '*':
            alert(r = a * b)
            break
        case '/':
            if (b === 0){
                alert('невозможно делить на 0')
                break
            }
            alert(r = a / b)
            break
        default:
            alert('ошибка')
            break
    }
}

calc(a, o, b, r)