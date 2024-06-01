import React from 'react'
import LearnerInd from './LearnerInd'
import { Link } from 'react-router-dom'


const Learners = ({LearnerList,onDelete, onToggle}) => {
  return (
    <>
    {LearnerList.map((learner,index)=>(
    <LearnerInd key={index}
     lInd = {learner}
     onDelete={onDelete} 
     onToggle={onToggle}/>
    ))}
    <Link to='/'>Home</Link>
    </>
  )
}

export default Learners
