import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
const Header = ({title, onAdd, showAdd}) => {
  
  return (
    <header className='header' >
      
      <Button 
        color ={showAdd?'Red':'Green'}
        text = {showAdd?'Close':'Add'}
        onClick={onAdd}
      />

      <Link to='/admin'>Admin</Link>
      <Link to='/user'>User</Link>
 
    </header>
  )
}
//put it in App.js
//component in root component


//deafult 
Header.defaultProps = {
    title : 'task'
}
export default Header
