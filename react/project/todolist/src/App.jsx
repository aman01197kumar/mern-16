import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodos, deleteTodo } from './redux/todos'

const App = () => {

  const [todo, setTodo] = useState({
    title: '',
    description: ''
  })

  const dispatch = useDispatch()
  const addTodoHandler = () => {
    dispatch(addTodos(todo))
    setTodo({ title: "", description: ''})
  }

  const todos = useSelector(state => state.todo.todos)


  return (
    <div>
      <div className="flex">

        <div className='flex flex-col'>
          <input type="text" placeholder='add title'
          value = {todo.title}
            onChange={(e) => setTodo(prev => ({ ...prev, title: e.target.value }))}
          // onChange={(e)=>setTitle(e.target.value)}
          />
          <input type="text" placeholder='add description' value = {todo.description}
            onChange={(e) => setTodo(prev => ({ ...prev, description: e.target.value }))}
          />
        </div>
        <button onClick={addTodoHandler}>Add todo</button>
      </div>
      <ul className="bg-yellow-500">
        {
          todos?.map((todo, index) => (
            <li key={index}>
              <h1>{todo.title}</h1>
              <p>{todo.description}</p>
              <button className="bg-gray-600 text-white" onClick={() => dispatch(deleteTodo(index))}>delete todo</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App