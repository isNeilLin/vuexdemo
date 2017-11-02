import { STORAGE_KEY } from './modules/todo';

export const localStoragePlugin = store => {
    store.subscribe((mutations, {todo})=>{
        window.localStorage.setItem(STORAGE_KEY,JSON.stringify(todo.todos))
    })
}