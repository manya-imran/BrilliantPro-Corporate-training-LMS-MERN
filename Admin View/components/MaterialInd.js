import React from 'react'
import {FaTimes} from 'react-icons/fa'

const MaterialInd = ({mInd,onDelete,onToggle}) => {
  return (
    <div className='MaterialInd'>
    
      <h3>{mInd.m_name} 
      <FaTimes style = 
      {{
          color:'red',cursor:'pointer'
      }} 
      onClick={()=>onDelete(mInd.m_id)}/>
      </h3>
      <p>{mInd.id}</p> 
    </div>
    
  )
}

export default MaterialInd
