import React from 'react'
import {FaTimes} from 'react-icons/fa'

const CourseInd = ({cInd,onDelete,onToggle}) => {
  return (
    <div className='CourseInd'>
    
    <h3>{cInd.cname} 
    <FaTimes style = 
    {{
        color:'red',cursor:'pointer'
    }} 
    onClick={()=>onDelete(cInd.c_id)}/>
    </h3>
    <p>{cInd.c_id}</p> 
  </div>
  )
}

export default CourseInd
