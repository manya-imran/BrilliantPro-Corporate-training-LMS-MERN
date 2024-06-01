import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Admin from './components/Admin';
import User from './components/User';

import Materials from './components/Materials';
import Assessments from './components/Assessments';
import Learners from './components/Learners'
import CourseComponent from './components/CourseComponent';
import LearnerComponent from './components/LearnerComponent';
import MaterialComponent from './components/MaterialComponent';
import AssessmentComponent from './components/AssessmentComponent';
//first route to normal elements
//second route to about

/*root-component*/
/*all functionality goes in here*/
/*instead og ngFor use htmlFor */

/*Task -> ftn
  Tasks -> Array
  Tasks -> props
 */

//TO USE ROUTER
/* WRAP EVERTHING IN OUTPUT IN <ROUTER> 
   now define routes right above footer
*/
  function App() {
  
  return (
    <Router>
    <div className="container">
      <header className='header'>
        <h1>BrilliantPro</h1>
      </header>
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/admin' element ={<Admin/>}/>
        <Route path='/user' element ={<User/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/courses' element ={<CourseComponent/>}/>
        <Route path='/materials' element ={<MaterialComponent/>}/>
        <Route path='/learners' element ={<LearnerComponent/>}/>
        <Route path='/assessments' element ={<AssessmentComponent/>}/>
      </Routes>
      <Footer/>
      </div> 
      </Router>
  );

  //&& means if true so this otherwise leave as it is
//pass anything in 
//<header to access it in header component>
//pass number or expression in {}

  } 


// class App extends React.Component{
//   render(){
//     return <Header />
//   }
// }
export default App;
