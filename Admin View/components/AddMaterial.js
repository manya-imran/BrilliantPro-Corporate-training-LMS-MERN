import React, { useState } from 'react'


const AddMaterial = ({onAdd}) => {
    //to update the dates we uses set and usestate
    const [m_id,setID] = useState('')
    const [m_name,setName] = useState('')

    const onSubmit= (e) =>
    {
        e.preventDefault()
        //validate input
        //use text,day,reminder defined in usestate

        if(!m_id){
            alert('add id')
        }
        onAdd({m_id,m_name})

        setID('')
        setName('')
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
          <label>Material Id</label>
          <input type = 'text' placeholder='Add'
          value={m_id} 
          onChange = {(e)=> setID(e.target.value)}/>
      </div>
      <div className='form-control'>
          <label>Material Name</label>
          <input type = 'text' placeholder='Add'
          value={m_name} 
          onChange = {(e)=> setName(e.target.value)}
          />
      </div>
      <input type='submit' value = 'Save' className='btn btn-block'/>
    

    </form>
  )
}

export default AddMaterial
