import React from 'react'
import {FaTimes} from 'react-icons/fa'

const AssessmentInd = ({aInd,onDelete,onToggle}) => {
  return (
    <div className='AssessInd'>
    
    <h3>{aInd.assesment_name} 
    <FaTimes style = 
    {{
        color:'red',cursor:'pointer'
    }} 
    onClick={()=>onDelete(aInd.assesment_id)}/>
    </h3>
    <p>{aInd.assesment_id}</p> 
  </div>
    
  )
}

export default AssessmentInd
