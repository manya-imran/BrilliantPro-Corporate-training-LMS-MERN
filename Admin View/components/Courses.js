import React from 'react'
import CourseInd from './CourseInd'
import { Link } from 'react-router-dom'

const Courses = ({CourseList,onDelete, onToggle}) => {
    return (
        <>
        
         {CourseList.map((course,index)=>(
         <CourseInd key={index}
          cInd = {course}
          onDelete={onDelete} 
          onToggle={onToggle}/>
         ))}

            

         <Link to='/'>Home</Link>
         </>
      )
}

export default Courses

