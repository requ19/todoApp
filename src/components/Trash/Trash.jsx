import React from 'react'
import Button from '../Button'
import './Trash.css'
const Trash = ({status, setStatus}) => {
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

  return (
    <div className='Trash'>
            <Button activeBtn={status === 'trash' && true} onClick={statusHandler} value='trash'>Trash</Button>
    </div>
  )
}

export default Trash
