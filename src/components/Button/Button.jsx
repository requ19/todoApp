import React from 'react'
import './Button.css'
const Button = ({children, onClick, value = '', activeBtn = false}) => {
  return (
    <button className='btn' type='button' onClick={onClick} value={value} style={{background: activeBtn ? 'rgb(152, 0, 222)' : '#fff'}}>{children}</button>
  )
}

export default Button
