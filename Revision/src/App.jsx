import React from 'react'
import { useState } from 'react';
import NavBar from './class-3/NavBar';
import {Routes,Route} from 'react-router-dom'
import Home from './class-3/Home'
import About from './class-3/About'
import ContactUs from './class-3/ContactUs'
// import UseEffectDemo from './class-2/UseEffectDemo';
const App = () => {
    // 
    
  return (
    <>
    {/* <h2>{count}</h2>
    <button onClick={()=>setCount(count+1)}>add</button>
    <button onClick={()=>setCount(count-count)}>reset</button>
    <button onClick={()=>setCount(count-1)}>sub</button>
    <div style={{backgroundColor:color,}}></div> */}

    {/* <UseEffectDemo></UseEffectDemo> */}
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/about' element = {<About/>}></Route>
      <Route path='/contactus' element = {<ContactUs/>}></Route>
    </Routes>
    </>
  )
}

export default App