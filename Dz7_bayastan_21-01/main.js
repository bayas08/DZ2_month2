class Cars {
    constructor(part)  {
        this.model = part.model
        this.color = part.color
        this.wheels = part.wheels
    }
    start() {
        console.log('машина заведена')
    }
}

const bmw = new Cars({
    model: 'x7',
    color: 'black',
    wheels: 4
})
console.log(bmw)
bmw.start()

class Mers extends Cars {
    constructor(part) {
        super(part)
        this.complectaion = part.complectaion
    }
}
const Mercedecbenz = new Mers({
    model: 'Mercedecbenz 211',
    color: 'black',
    wheels: 4,
    complectaion: 'avangard'
})
console.log(Mercedecbenz)
Mercedecbenz.start()

class Toyota extends Cars {
    constructor(part) {
        super(part);
        this.volune = part.volune

    }
}
const Toyotacamry = new Toyota({
    model: 'Toyotacamry 75',
    color: 'white',
    wheels: 4,
    complectaion: 'xse',
    volune: '3.5'
})
console.log(Toyotacamry)
Toyotacamry.start()

class Lexus extends Cars {
    constructor(part) {
        super(part);
        this.wd = part.wd

    }
}
const Lexus570 = new Lexus({
    model: 'Lexus570',
    color: 'white',
    wheels: 4,
    complectaion: 'black vision',
    volune: '5.7',
    wd: 4
})
console.log(Lexus570)
Lexus570.start()

//dop dz

class Light
{
    constructor(selector)
    {
        this.$element = document.getElementById(selector)
    }
}

class Circle extends Light
{
    constructor(options)
    {
        super(options.selector)
        this.$element.style.backgroundColor = options.color
        this.$element.textContent = options.text
    }
}

let color = prompt('Введите цвет светофора:').toLowerCase().trim();
if (color === 'красный' || color === 'red') {
    const red = new Circle({
        selector: 'red',
        color: 'red',
        text: 'stop'
    })
}
else if (color === 'желтый' || color === 'жёлтый' || color === 'yellow') {
    const yellow = new Circle({
        selector: 'yellow',
        color: 'yellow',
        text: 'wait'
    })
}
else if (color === 'зеленный' || color === 'зеленый' || color === 'зелённый' || color === 'зелёный' || color === 'green') {
    const green = new Circle({
        selector: 'green',
        color: 'green',
        text: 'go'
    })
}
else alert('Вы должны ввести цвет светофора: красный, желтый или зеленный')


