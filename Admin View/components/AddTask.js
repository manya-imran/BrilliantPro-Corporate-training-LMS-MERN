import React, { useState } from 'react'


const AddTask = ({onAdd}) => {
    //to update the dates we uses set and usestate
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    const onSubmit= (e) =>
    {
        e.preventDefault()
        //validate input
        //use text,day,reminder defined in usestate

        if(!text){
            alert('add task')
        }
        onAdd({text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
          <label>task</label>
          <input type = 'text' placeholder='Add'
          value={text} 
          onChange = {(e)=> setText(e.target.value)}/>
      </div>
      <div className='form-control'>
          <label>time</label>
          <input type = 'text' placeholder='Add'
          value={day} 
          onChange = {(e)=> setDay(e.target.value)}
          />
      </div>
      <div className='form-control form-control-check'>
          <label>reminder</label>
          <input type = 'checkbox'
          checked={reminder}
          value={reminder} 
          onChange = {(e)=> setReminder(e.currentTarget.checked)}
          />
   
      </div>
      <input type='submit' value = 'Save' className='btn btn-block'/>
    

    </form>
  )
}

export default AddTask
