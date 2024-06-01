import React from 'react'
import Event from './Event'
//to access tasks from other components we put them in App.js
//and can pass values to them using props
const Task = ({Tasks, onDelete, onToggle}) => {
 
  return (
    <>
     {Tasks.map((task,index)=>(
     <Event key={index}
      event = {task}
      onDelete={onDelete} 
      onToggle={onToggle}/>
     ))}
     </>
  )
}

export default Task
