import React from 'react'
import Learners from './Learners'
import Header from './Header'
import AddLearner from './AddLearner'

import { useState,useEffect } from 'react'
    
const LearnerComponent = () => {

    const [showAddLearners, setShowAddLearners] = useState(false)

    const [LearnerList,setLearners]=useState([])
    //COURSE CRUD
  //to do when page loads we use useEffect
  useEffect(()=>{
    const getLearners = async () => {
      const coursesFromServer = await fetchLearners()
      setLearners(coursesFromServer)
    }
    getLearners()
  },[])

  //fetch events from Tasks array in db.json(backend)
  const fetchLearners = async () => {
    const res = await 
    fetch('http://localhost:5000/learnerlist')

    const data = await res.json()

    console.log(data)
    return data
  }

//...task means all components of variable task

//ADD TASK Async
const addLearner = async (learner) =>{
  const res = await fetch('http://localhost:5000/learnerlist'
  ,{
    method: 'POST',
    headers:{
      'Content-type':'application/json'
    },
    body: JSON.stringify(learner),

  })
  

  const data =await res.json()
  //data is new task to be added

  setLearners([...LearnerList,data])
}

// Add event to Tasks array Normal
// const addTask = (task) =>{
//   const id = Math.floor(Math.random() *10000) +1
//   const newTask = {id, ...task}
//   setTasks([...Tasks,newTask])

// }
 //DELETE EVENT Async
const deleteLearner = async(l_id) => {
    await fetch(`http://localhost:5000/learnerlist/${l_id}`,
    {
      method :'DELETE',
      
    })
    setLearners(LearnerList.filter((learner) => learner.l_id !== l_id))
  }


//Fetch the task with the given ID
const fetchLearner = async (l_id) => {
  const res = await 
  fetch(`http://localhost:5000/learnerlist/${l_id}`)

  const data = await res.json()

  console.log(data)
  return data
}

//Toggle value Async
const toggleRem = async(l_id) =>{

  console.log("toggle",l_id)
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
        onAdd={() => setShowAddLearners
        (!showAddLearners)}
        showAdd = {showAddLearners}
      />
      
      {
      showAddLearners && <AddLearner onAdd={addLearner}/>
      }


    {LearnerList.length > 0 ? 
      (
        <Learners
         LearnerList={LearnerList} onDelete ={deleteLearner} 
         onToggle = {toggleRem}
        />
      ):
      ( 
          'No Learners left'
    )}
   

    </div>
  )
}

export default LearnerComponent
