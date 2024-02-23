import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import face from '../../assets/man-user-circle-icon.svg'

function Dropdownex() {
  return (
    <div className='pic'>
      <Dropdown>
        <Dropdown.Toggle >
          <img src={face} alt='icon'></img>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>

  )
}

export default Dropdownex;