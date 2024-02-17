import React from 'react'
import './Form.css'
const AddForm = ({setTodos, setTodoText, todoText}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos((prev)=> [...prev, {
      id: prev.length !==0 && prev.at(-1).id ? prev.at(-1).id +1:1,
      todoText: todoText,
      isActive: true,
      isDeleted: false,
    }])
    setTodoText('')
  }
  const todoTextInputChange =(e) => {
   setTodoText(e.target.value)
  }
  return (
   <form className='form-todo' onSubmit={submitHandler}>
    <input placeholder='your tasks...' type='text' onChange={todoTextInputChange} value={todoText}></input>
    <button type='submit'>Add</button>
   </form>
  )
}

export default AddForm