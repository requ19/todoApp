import React from 'react'
import './Button.css'
const Button = ({children, onClick, value = '', activeBtn = false}) => {
  return (
    <button className='btn' type='button' onClick={onClick} value={value} style={{background: activeBtn ? 'rgb(222, 222, 0)' : '#fff'}}>{children}</button>
  )
}

export default Button