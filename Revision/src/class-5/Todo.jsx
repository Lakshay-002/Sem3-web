import React, { useState } from 'react'

const Todo = () => {
   const[taskList,setTaskList]= useState([]);
 const[input,setInput] = useState("");

 const updateList=()=>{
    let temp = [...taskList];
    temp.push(input);

    setTaskList(temp);
    console.log(taskList);
 }

 return (
   <>
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
export default Todo