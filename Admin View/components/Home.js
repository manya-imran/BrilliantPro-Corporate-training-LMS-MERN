import React from 'react'
import Header from './Header';
import Task from './Task';
import AddTask from './AddTask';

import { useState,useEffect } from 'react'


const Home = () => {
    
  
  //initially false dont display form
  const [showAddTask, setShowAddTask] = useState(false)
  //toggle to show
  const [Tasks,setTasks]=useState([])

  //to do when page loads we use useEffect
  useEffect(()=>{
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[])

  //fetch events from Tasks array in db.json(backend)
  const fetchTasks = async () => {
    const res = await 
    fetch('http://localhost:5000/tasks')

    const data = await res.json()

    console.log(data)
    return data
  }

//...task means all components of variable task

//ADD TASK Async
const addTask = async (task) =>{
  const res = await fetch('http://localhost:5000/tasks'
  ,{
    method: 'POST',
    headers:{
      'Content-type':'application/json'
    },
    body: JSON.stringify(task),

  })
  

  const data =await res.json()
  //data is new task to be added

  setTasks([...Tasks,data])
}

// Add event to Tasks array Normal
// const addTask = (task) =>{
//   const id = Math.floor(Math.random() *10000) +1
//   const newTask = {id, ...task}
//   setTasks([...Tasks,newTask])

// }
 //DELETE EVENT Async
const deleteEvent = async(id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,
    {
      method :'DELETE',
      
    })
    setTasks(Tasks.filter((task) => task.id !== id))
  }

//DELETE EVENT Normal
// const deleteEvent = (id) => {
//   setTasks(Tasks.filter((task) => task.id !== id))
// }

//Fetch the task with the given ID
const fetchTask = async (id) => {
  const res = await 
  fetch(`http://localhost:5000/tasks/${id}`)

  const data = await res.json()

  console.log(data)
  return data
}

//Toggle value Async
const toggleRem = async(id) =>{
  const taskToToggle = await fetchTask(id)
  const updateTask = {...taskToToggle, 
    reminder: !taskToToggle.reminder}

  const res = await fetch(`http://localhost:5000/tasks/${id}`,
  {
    method:'PUT',
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updateTask)


  })

  const data = await res.json()

  

  setTasks(
    Tasks.map(
    (task)=> task.id === id ? 
    {...task, reminder:data.reminder}: task
    ))
}


//Toggle value Normal
// const toggleRem =(id) =>{
//    setTasks(Tasks.map((task)=> task.id === id ? 
//    {...task, reminder:!task.reminder}: task))
// }


  return (
    <div>
      <Header 
        onAdd={() => setShowAddTask
        (!showAddTask)}
        showAdd = {showAddTask}
      />
      
      {
      showAddTask && <AddTask onAdd={addTask}/>
      }

      {Tasks.length > 0 ? 
      (
        <Task
         Tasks={Tasks} onDelete ={deleteEvent} 
         onToggle = {toggleRem}
        />
      ):
      ( 
          'No tasks left'
      )}
            
        

      
    </div>
  )
}

export default Home
