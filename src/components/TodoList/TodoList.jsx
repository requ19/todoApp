import React from 'react'
import Todo from '../Todo'
import './TodoList.css'

const TodoList = ({todos, setTodos, status, searchText}) => {

    const textSea= searchText.toLowerCase()
    let filtererTodos
    if (status === 'active') {
      filtererTodos = todos.filter(el => el.isActive && !el.isDeleted  && el.todoText.includes(textSea)  )
    } else if (status === 'done') {
      filtererTodos = todos.filter(el => !el.isActive && !el.isDeleted  && el.todoText.includes(textSea))
    }else if (status === 'trash') {
      filtererTodos = todos.filter(el => el.isDeleted)
    } else {
      filtererTodos = todos.filter(el => !el.isDeleted && el.todoText.toLowerCase().includes(textSea))
    }
  return (
    <ul className='todo-list'>
      {filtererTodos.map(todo => (
        <Todo setTodos={setTodos} key={todo.id} todoObj={todo} status={status}/>
      ))}
    </ul>
  )
}

export default TodoList 