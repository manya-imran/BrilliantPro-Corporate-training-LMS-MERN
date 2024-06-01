import React from 'react'
import Materials from './Materials'
import Header from './Header'
import AddMaterial from './AddMaterial'

import { useState,useEffect } from 'react'
    
const MaterialComponent = () => {

    const [showAddMaterials, setShowAddMaterials] = useState(false)

    const [MaterialList,setMaterials]=useState([])
    //COURSE CRUD
  //to do when page loads we use useEffect
  useEffect(()=>{
    const getMaterials = async () => {
      const materialsFromServer = await fetchMaterials()
      setMaterials(materialsFromServer)
    }
    getMaterials()
  },[])

  //fetch events from Tasks array in db.json(backend)
  const fetchMaterials = async () => {
    const res = await 
    fetch('http://localhost:5000/materiallist')

    const data = await res.json()

    console.log(data)
    return data
  }

//...task means all components of variable task

//ADD TASK Async
const addMaterial = async (material) =>{
  const res = await fetch('http://localhost:5000/materiallist'
  ,{
    method: 'POST',
    headers:{
      'Content-type':'application/json'
    },
    body: JSON.stringify(material),

  })
  

  const data =await res.json()
  //data is new task to be added

  setMaterials([...MaterialList,data])
}

// Add event to Tasks array Normal
// const addTask = (task) =>{
//   const id = Math.floor(Math.random() *10000) +1
//   const newTask = {id, ...task}
//   setTasks([...Tasks,newTask])

// }
 //DELETE EVENT Async
const deleteMaterial = async(m_id) => {
    await fetch(`http://localhost:5000/materiallist/${m_id}`,
    {
      method :'DELETE',
      
    })
    setMaterials(MaterialList.filter((material) => material.m_id !== m_id))
  }


//Fetch the task with the given ID
const fetchMaterial = async (m_id) => {
  const res = await 
  fetch(`http://localhost:5000/materiallist/${m_id}`)

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
        onAdd={() => setShowAddMaterials
        (!showAddMaterials)}
        showAdd = {showAddMaterials}
      />
      
      {
      showAddMaterials && <AddMaterial onAdd={addMaterial}/>
      }


    {MaterialList.length > 0 ? 
      (
        <Materials
        MaterialList={MaterialList} onDelete ={deleteMaterial} 
         onToggle = {toggleRem}
        />
      ):
      ( 
          'No Materials left'
    )}
   

    </div>
  )
}

export default MaterialComponent
