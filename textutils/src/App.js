import logo from './logo.svg';
import './App.css';
import * as ReactDOM from "react-dom/client";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './components/Home';

function App() {
  const[alert,setAlert]=useState(null )
  const[Mode,setMode]=useState('light')

  const toggleMode=()=>{
    if(Mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black'
      document.title='Textutils-DarkMode';

    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      document.title='Textutils-LightMode';

    }
  }
  return (
    <>
    

{/* <Navbar title="textutils1" Abouttext="About Me" mode={Mode} toggleMode={toggleMode}/> */}
{/* <Navbar/>/ */}
{/* <TextForm heading="welcome" mode={Mode}/> */}
{/* <Alert Alert="this is the alert"/> */}
{/* <About/> */}
{/* <Home/> */}

{/* /users-->componment 1 */}
{/* /users/home-->component 2 */}
<BrowserRouter>
<Navbar title="textutils1" Abouttext="About Us" mode={Mode} toggleMode={toggleMode}/> 
<Routes>
<Route  exact path='/about' element={<About/>}></Route>
<Route exact path='/home' element={<TextForm heading="welcome" mode={Mode}/>}></Route>
{/* <Route path='/' element={<Home/>}></Route> */}
</Routes>

</BrowserRouter>



    </>
  )
}

export default App;
