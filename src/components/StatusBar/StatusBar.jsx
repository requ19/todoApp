import React from 'react'
import Button from '../Button'
import './StatusBar.css'
const StatusBar = ({setStatus, status, searchText, setSearchText}) => {
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }
  const searchHandler = (e) => {
      setSearchText(e.target.value)
  }

  return (
    <div className='status'>
        <div>
            <Button activeBtn={status === 'all' && true} onClick={statusHandler} value='all'>All</Button>
            <Button activeBtn={status === 'active' && true} onClick={statusHandler} value='active'>Active</Button>
            <Button activeBtn={status === 'done' && true} onClick={statusHandler} value='done'>Done</Button>
        </div>
        <input onChange={searchHandler} value={searchText} type="text" placeholder="search"/>
    </div>
  )
}

export default StatusBar