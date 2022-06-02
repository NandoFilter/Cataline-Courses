import { createApp } from 'vue'
import Todos from './api/todos'
import './assets/css/style.css'

const allTodos = new Todos()

const app = createApp({
    data() {
        return {
            todos: [],
            form: {
                text: '',
                done: false,
            },
        }
    },
    created() {
        this.fetchAll()
    },
    methods: {
        async fetchAll() {
            this.todos = await allTodos.index()
            console.log(this.todos);
        },
        async createTodo() {
            const newTodo = await allTodos.store( this.form );
            this.todos.push( newTodo );

            this.form.text = '';
            this.form.done = false;
        }
    },
})

app.mount('#app')