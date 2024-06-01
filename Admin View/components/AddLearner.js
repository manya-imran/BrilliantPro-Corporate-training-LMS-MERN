import React, { useState } from 'react'


const AddLearner = ({onAdd}) => {
    //to update the dates we uses set and usestate
    const [l_id,setID] = useState('')
    const [l_name,setName] = useState('')

    const onSubmit= (e) =>
    {
        e.preventDefault()
        //validate input
        //use text,day,reminder defined in usestate

        if(!l_id){
            alert('add id')
        }
        onAdd({l_id,l_name})

        setID('')
        setName('')
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
          <label>Learner Id</label>
          <input type = 'text' placeholder='Add'
          value={l_id} 
          onChange = {(e)=> setID(e.target.value)}/>
      </div>
      <div className='form-control'>
          <label>Learner Name</label>
          <input type = 'text' placeholder='Add'
          value={l_name} 
          onChange = {(e)=> setName(e.target.value)}
          />
      </div>
      <input type='submit' value = 'Save' className='btn btn-block'/>
    

    </form>
  )
}

export default AddLearner
