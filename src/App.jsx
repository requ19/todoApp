import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import StatusBar from './components/StatusBar/StatusBar';
import TodoList from './components/TodoList';
import AddForm from './components/AddForm';
import Trash from './components/Trash';
import './App.css'


function App() {
  const [todos, setTodos] = useState([])
  const [todoText, setTodoText] = useState('')
  const [status, setStatus] = useState('all')
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')))
  }, [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
 
  return (
  <div className='App'>
      <div className="form">
        <Header todos={todos} />
        <StatusBar todoText={todoText} setStatus={setStatus} status={status} setSearchText={setSearchText} searchText={searchText} />
        <TodoList setTodos={setTodos} todos={todos} status={status} setSearchText={setSearchText} searchText={searchText} />
        <AddForm  setTodos={setTodos} setTodoText={setTodoText} todoText={todoText}/>
        <Trash setStatus={setStatus} status={status} />
      </div>
        <svg class="moon" width="190" height="190" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90" cy="90" r="110" fill="#fff" />
      </svg>
  </div>
  );
}

export default App;
