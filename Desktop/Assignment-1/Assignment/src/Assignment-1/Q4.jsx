import React from 'react'
import { useState } from 'react';
import Badge from './Badge'

const Q4 = () => {

const[taskList,setTaskList]= useState(["Task1", "Task2"]);
 const[input,setInput] = useState("");

 const updateList=()=>{
    if (input.trim() === "") {

      return;

    }
    let temp = [...taskList];
    temp.push(input);

    setTaskList(temp);
    console.log("");
 }

 return (
   <>
   <Badge total={taskList.length} />
     <input type="text" value={input} onChange={e => setInput(e.target.value)} />
     <button onClick={updateList}>Add Task</button>
     <ul>
         {taskList.map((value,index)=>{
          return <li key={index}>{value}</li>
         })}
     </ul>
   </>
 )
}


export default Q4