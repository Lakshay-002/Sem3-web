import React from 'react'
import { useState } from 'react';
// import UseReduserDemo from './class-5/UseReduserDemo';
// import Todo from './class-5/Todo';
// import NavBar from './class-3/NavBar';
// import {Routes,Route} from 'react-router-dom'
// import Home from './class-3/Home'
// import About from './class-3/About'
// import ProductD from './class-3/ProductD'
// import ProductList from './class-3/ProductList'
// import ContactUs from './class-3/ContactUs'
// // import UseEffectDemo from './class-2/UseEffectDemo';
import UseReducerTodo from './class-5/UseReducerTodo';
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
    {/* <NavBar></NavBar>
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/about' element = {<About/>}></Route>
      <Route path='/contactus' element = {<ContactUs/>}></Route>
      <Route   path='/list'  element={<ProductList/>}/>
      <Route path='/p/:id' element={<ProductD/>}></Route>
    </Routes> */}
   {/* <Todo></Todo> */}
   <UseReducerTodo></UseReducerTodo>
    </>
  )
}

export default App