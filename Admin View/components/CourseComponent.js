import React from 'react'
import Courses from './Courses' 
import Header from './Header'
import AddCourse from './AddCourse'

import { useState,useEffect } from 'react'
    
const CourseComponent = () => {

    const [showAddCourses, setShowAddCourses] = useState(false)

    const [CourseList,setCourses]=useState([])
    //COURSE CRUD
  //to do when page loads we use useEffect
  useEffect(()=>{
    const getCourses = async () => {
      const coursesFromServer = await fetchCourses()
      setCourses(coursesFromServer)
    }
    getCourses()
  },[])

  //fetch events from Tasks array in db.json(backend)
  const fetchCourses = async () => {
    const res = await 
    fetch('http://localhost:5000/courselist')

    const data = await res.json()

    console.log(data)
    return data
  }

//...task means all components of variable task

//ADD TASK Async
const addCourse = async (course) =>{
  const res = await fetch('http://localhost:5000/courselist'
  ,{
    method: 'POST',
    headers:{
      'Content-type':'application/json'
    },
    body: JSON.stringify(course),

  })
  

  const data =await res.json()
  //data is new task to be added

  setCourses([...CourseList,data])
}

// Add event to Tasks array Normal
// const addTask = (task) =>{
//   const id = Math.floor(Math.random() *10000) +1
//   const newTask = {id, ...task}
//   setTasks([...Tasks,newTask])

// }
 //DELETE EVENT Async
const deleteCourse = async(c_id) => {
    await fetch(`http://localhost:5000/courselist/${c_id}`,
    {
      method :'DELETE',
      
    })
    setCourses(CourseList.filter((course) => course.c_id !== c_id))
  }


//Fetch the task with the given ID
const fetchCourse = async (c_id) => {
  const res = await 
  fetch(`http://localhost:5000/courselist/${c_id}`)

  const data = await res.json()

  console.log(data)
  return data
}

//Toggle value Async
const toggleRem = async(c_id) =>{

  console.log("toggle",c_id)
  /*
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
    */
}
  return (
    <div className="container">
    <Header 
        onAdd={() => setShowAddCourses
        (!showAddCourses)}
        showAdd = {showAddCourses}
      />
      
      {
      showAddCourses && <AddCourse onAdd={addCourse}/>
      }


    {CourseList.length > 0 ? 
      (
        <Courses
         CourseList={CourseList} onDelete ={deleteCourse} 
         onToggle = {toggleRem}
        />
      ):
      ( 
          'No Courses left'
    )}
   

    </div>
  )
}

export default CourseComponent
