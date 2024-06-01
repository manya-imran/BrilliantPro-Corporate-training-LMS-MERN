import React from 'react'
import AssessmentInd from './AssessmentInd'

const Assessments = ({AssessmentList, onDelete, onToggle}) => {
  return (
    <>
    {AssessmentList.map((assessment,index)=>(
    <AssessmentInd 
     key={index}
     aInd = {assessment}
     onDelete={onDelete} 
     onToggle={onToggle}/>
    ))}
    </>
  )
}

export default Assessments
