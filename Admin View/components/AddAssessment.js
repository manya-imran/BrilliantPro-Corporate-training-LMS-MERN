import React, { useState } from 'react'


const AddAssesment = ({onAdd}) => {
    //to update the dates we uses set and usestate
    const [assesment_id,setID] = useState('')
    const [assesment_name,setName] = useState('')

    const onSubmit= (e) =>
    {
        e.preventDefault()
        //validate input
        //use text,day,reminder defined in usestate

        if(!assesment_id){
            alert('add id')
        }
        onAdd({assesment_id,assesment_name})

        setID('')
        setName('')
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
          <label>AssessmentId</label>
          <input type = 'text' placeholder='Add'
          value={assesment_id} 
          onChange = {(e)=> setID(e.target.value)}/>
      </div>
      <div className='form-control'>
          <label>Assessment Name</label>
          <input type = 'text' placeholder='Add'
          value={assesment_name} 
          onChange = {(e)=> setName(e.target.value)}
          />
      </div>
      <input type='submit' value = 'Save' className='btn btn-block'/>
    

    </form>
  )
}

export default AddAssesment
