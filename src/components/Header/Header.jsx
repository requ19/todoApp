import React from 'react'
import './Header.css'
const Header = ({todos}) => {
    const activeTodos = todos.filter(el => el.isActive && !el.isDeleted).length
    const doneTodos = todos.filter(el => !el.isActive && !el.isDeleted).length

  return (
    <div className='header'>
        <h1 className='title'>TodoList</h1>
        <div className='counter'>
            <span>{activeTodos} more,</span>
            <span>{doneTodos} done</span>
        </div>
    </div>
  )
}

export default Header