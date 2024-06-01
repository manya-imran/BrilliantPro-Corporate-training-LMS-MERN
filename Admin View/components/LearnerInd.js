import React from 'react'
import {FaTimes} from 'react-icons/fa'

const LearnerInd = ({lInd,onDelete,onToggle}) => {
  return (
    <div className='LearnerInd'>
    
    <h3>{lInd.l_name} 
    <FaTimes style = 
    {{
        color:'red',cursor:'pointer'
    }} 
    onClick={()=>onDelete(lInd.l_id)}/>
    </h3>
    <p>{lInd.l_id}</p> 
  </div>
  )
}

export default LearnerInd
