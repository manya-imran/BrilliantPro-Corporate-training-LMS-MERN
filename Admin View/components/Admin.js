import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Materials from './Materials';
import Learners from './Learners';
import Assessments from './Assessments';

import Courses from './Courses';

const Admin = () => {


  const [LearnerList,setLearners]=useState([])
  const [MaterialList,setMaterial]=useState([])
  const [AssessmentList,setassessment]=useState([])

  


  //LOGIN
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const user_database =[
    {
      "username":"user1",
      "password":"admin1"
    },
    {
      "username":"user2",
      "password":"admin2"
    }
  ]
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    //get data from form
    var {uname, pass}= document.forms[0]

    //find
    const data = user_database.find((user)=> user.username === uname.value)
    //compare
    if(data)
    {
      if(data.password !== pass.value)
      {
        setErrorMessages({name:"pass", message: errors.pass})

      }
      else{
        setIsSubmitted(true)
      }
    }
    else{
      setErrorMessages({name:"uname", message:errors.uname})

    }
  };
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">
              {errorMessages.message}
      </div>
    );

    const renderForm = (
      <form className='admin-Login' onSubmit={handleSubmit}>
      <div className='un'>
      <label>
        Username
      </label>
      <input type="text" name="uname" required/>
      {renderErrorMessage("uname")}
      </div>
      <div className='pwd'>
        <label>
          Password
        </label>
        <input type="text" name="pass" required/>
        {renderErrorMessage("pass")}
      </div>
      <input type='submit' value = 'Save' className='btn btn-block'/>
    </form>
    )

  return (
    <>
    <h2 className='title'>Sign In</h2>
    <div>
    {isSubmitted ? 
    <div>
      <p>Login Successful</p>
      <Link to='/courses'>Courses</Link> 
      <br/>
      <Link to='/learners'>Learners</Link> 
      <br/>
      <Link to='/materials'>Materials</Link>
      <br/> 
      <Link to='/assessments'>Assessments</Link> 
      <br/>
      
    </div>:renderForm}
    </div>
    
   

      
   
    
    <Link to='/'>Home</Link>
   
    </>
  )
}

export default Admin
