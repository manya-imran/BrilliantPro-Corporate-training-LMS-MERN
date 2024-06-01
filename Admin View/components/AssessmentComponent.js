import React from 'react'
import Assessments from './Assessments'
import Header from './Header'
import AddAssesment from './AddAssessment'

import { useState,useEffect } from 'react'
    
const AssessmentComponent = () => {

    const [showAddAssessments, setShowAddAssessments] = useState(false)

    const [AssessmentList,setAssessments]=useState([])
//COURSE CRUD
  //to do when page loads we use useEffect
  useEffect(()=>{
    const getAssessments = async () => {
      const assessFromServer = await fetchAssessments()
      setAssessments(assessFromServer)
    }
    getAssessments()
  },[])

  //fetch events from Tasks array in db.json(backend)
  const fetchAssessments = async () => {
    const res = await 
    fetch('http://localhost:5000/assessmentlist')

    const data = await res.json()

    console.log(data)
    return data
  }

//...task means all components of variable task

//ADD TASK Async
const addAssessment = async (assessment) =>{
  const res = await fetch('http://localhost:5000/assessmentlist'
  ,{
    method: 'POST',
    headers:{
      'Content-type':'application/json'
    },
    body: JSON.stringify(assessment),

  })
  

  const data =await res.json()
  //data is new task to be added

  setAssessments([...AssessmentList,data])
}

// Add event to Tasks array Normal
// const addTask = (task) =>{
//   const id = Math.floor(Math.random() *10000) +1
//   const newTask = {id, ...task}
//   setTasks([...Tasks,newTask])

// }
 //DELETE EVENT Async
const deleteAssessment = async(assesment_id) => {
    await fetch(`http://localhost:5000/assessmentlist/${assesment_id}`,
    {
      method :'DELETE',
      
    })
    setAssessments(AssessmentList.filter((assessment) => assessment.assesment_id !== assesment_id))
  }


//Fetch the task with the given ID
const fetchAssessment = async (assesment_id) => {
  const res = await 
  fetch(`http://localhost:5000/assessmentlist/${assesment_id}`)

  const data = await res.json()

  console.log(data)
  return data
}

//Toggle value Async
const toggleRem = async(assesment_id) =>{

  console.log("toggle",assesment_id)
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
        onAdd={() => setShowAddAssessments
        (!showAddAssessments)}
        showAdd = {showAddAssessments}
      />
      
      {
      showAddAssessments && <AddAssesment onAdd={addAssessment}/>
      }


    {AssessmentList.length > 0 ? 
      (
        <Assessments
        AssessmentList={AssessmentList} onDelete ={deleteAssessment} 
         onToggle = {toggleRem}
        />
      ):
      ( 
          'No Assessments left'
    )}
   

    </div>
  )
}

export default AssessmentComponent
