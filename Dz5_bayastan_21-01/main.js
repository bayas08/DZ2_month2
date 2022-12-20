const input = document.getElementById('input')
const createButton = document.getElementById('crete_todo')
const todoList = document.getElementById('todo_list')

const createTodo = function () {
    if (input.value.trim() === '') {
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const btn = document.createElement('button')
        const edit = document.createElement('button')

        edit.setAttribute('class', 'edit')
        btn.setAttribute('class',  'btn')
        div.setAttribute('class', 'block_text')
        text.setAttribute('class', 'text')

        edit.innerText = 'edit'
        btn.innerText = 'delete'
        text.innerText = input.value.trim()
        div.append(text,edit, btn)
        todoList.append(div)

        edit.addEventListener( 'click', () => {
            let pro = prompt('введите текст').trim()
            text.innerText = pro
        })
        btn.addEventListener('click', () => {
            div.remove()
        })
    }
    input.value = ''
}

createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', (e) => e.keyCode === 13 ? createTodo() : false)

// createButton.onclick = () => {
//     if (input.value.trim() === '') return false
//     const div = document.createElement('div')
//     const text = document.createElement('h3')
//
//     div.setAttribute('class', 'block_text')
//     text.setAttribute('class','text')
//
//     text.innerText = input.value.trim()
//     div.append(text)
//     todoList.append(div)
//
//     input.value = ''
// }