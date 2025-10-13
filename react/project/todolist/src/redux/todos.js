import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodos: (state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {
            console.log(action.payload,'paylo');
            state.todos = state.todos.filter((_, index) => index !== action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addTodos,deleteTodo } = todoSlice.actions

export default todoSlice.reducer