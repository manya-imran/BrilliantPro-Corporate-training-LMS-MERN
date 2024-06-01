import React, { useState } from 'react'

const AddCourse = ({onAdd}) => {
  
    //to update the dates we uses set and usestate
    const [c_id,setID] = useState('')
    const [cname,setName] = useState('')
    const [Learner,setLearner] = useState([])
    const [material,setMaterial] = useState([])
    const [certificates, setCertificate] = useState([])

    const onSubmit= (e) =>
    {
        e.preventDefault()
        //validate input
        //use text,day,reminder defined in usestate

        if(!c_id){
            alert('add ID')
        }
        onAdd({c_id,cname, Learner,material,certificates})

        setID('')
        setName('')
        setLearner([])
        setMaterial([])
        setCertificate([])
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
          <label>Course ID</label>
          <input type = 'text' placeholder='Add'
          value={c_id} 
          onChange = {(e)=> setID(e.target.value)}/>
      </div>
      <div className='form-control'>
          <label>Name</label>
          <input type = 'text' placeholder='Add'
          value={cname} 
          onChange = {(e)=> setName(e.target.value)}
          />
      </div>
      <div className='form-control'>
          <label>Learner</label>
          <input type = 'text' placeholder='Add'
          value={Learner} 
          onChange = {(e)=> setLearner([...Learner,e.target.value])}
          />
      </div>
      <div className='form-control'>
          <label>Material</label>
          <input type = 'text' placeholder='Add'
          value={material} 
          onChange = {(e)=> setMaterial([...material,e.target.value])}
          />
      </div>
      <div className='form-control'>
          <label>Certificates</label>
          <input type = 'text' placeholder='Add'
          value={certificates} 
          onChange = {(e)=> setCertificate([...certificates, e.target.value])}
          />
      </div>
      
      

      <input type='submit' value = 'Save' className='btn btn-block'/>
    

    </form>
  )
}

export default AddCourse
