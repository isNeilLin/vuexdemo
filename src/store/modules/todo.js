export const STORAGE_KEY = 'todos-vuejs'
console.log(window.localStorage.getItem(STORAGE_KEY))
const state = {
    todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}

const getters = {
    todos(state){
        return state.todos
    },
    allChecked(state){
        return state.todos.every(todo=>todo.done)
    },
    remaining(state){
        return state.todos.filter(todo=>!todo.done).length
    }
}

const mutations = {
    addTodo (state, { text }) {
        state.todos.push({
            text,
            done: false
        })
    },
    deleteTodo (state, { todo }) {
        state.todos.splice(state.todos.indexOf(todo),1)
    },
    toggleTodo (state, { todo }) {
        todo.done = !todo.done
    },
    editTodo (state, { todo,value }) {
        todo.text = value
    },
    toggleAll (state, { done }) {
        state.todos.map(todo=>{
            todo.done = done
        })
    },
    clearCompleted (state) {
        state.todos = state.todos.filter(todo=>!todo.done)
    }
}
export default {
    state,
    getters,
    mutations
}