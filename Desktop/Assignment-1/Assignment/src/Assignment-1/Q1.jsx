import React from 'react'
import { useState } from 'react';

const Q1 = () => {
    const[count,setCount]=useState(0);
    let inc=()=>{
        if(count<10){
            setCount(count+1)
        }
        else{
            alert("max")
        }
    }
    let dec=()=>{
        if(count>0){
            setCount(count-1)
        }
        else{
            alert("min")
        }
    }
  return (
    <>
    <h2>{count}</h2>
    <button onClick={inc}>Add</button>
    <button onClick={dec}>sub</button>
    
    
    </>
  )
}

export default Q1