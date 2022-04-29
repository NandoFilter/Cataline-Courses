import Todos from './api/todos'

async function exec() {
    const todos = new Todos()

    const response = await todos.update({ id: 5, text: 'Cortar o cabelo', done: true })
    console.log(response);
}

exec()