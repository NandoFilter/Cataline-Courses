import { createStore } from 'vuex'

export default createStore({
  /* Estado Global */
  state: {
    todos: []
  },
  /* Servem para alterar o Estado */
  mutations: {
    SET_TODOS(state, payloads) {
      state.todos = payloads
    }
  },
  /* Requisições disparadas ao acessar a página */
  actions: {
    fetchTodos(context) {
      const todos = [
        { id: 1, text: 'Estudar HTML & CSS', done: true },
        { id: 2, text: 'Conceitos Vuex', done: true },
        { id: 3, text: 'Atomic Design', done: false },
        { id: 4, text: 'Começar com Nuxt', done: false },
        { id: 5, text: 'Back-end com Adonis', done: false }
      ]

      /* Envia os dados pra Mutation alterar o Estado */
      context.commit('SET_TODOS', todos)
    }
  },
  /* Retornam o Estado */
  getters: {
    $allTodos(state) {
      return state.todos
    },
    $doneTodos(state) {
      return state.todos.filter((todo) => todo.done)
    }
  }
})
