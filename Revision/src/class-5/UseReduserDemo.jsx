import React from 'react'
import { useReducer } from 'react'

const UseReduserDemo = () => {
    function reduser(count,action){
        if(action.type=="inc"){
            return count+1
        }else if(action.type=="dec"){
            return count-1
        }else if(action.type=="res"){
            return 0
        }else{
            return count
        }

    }
    const[count,dispatch]=useReducer(reduser,0);
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=>dispatch({type:"inc"})}>Add</button>
        <button onClick={()=>dispatch({type:"dec"})}>Sub</button>
        <button onClick={()=>dispatch({type:"res"})}>Reset</button>
    </div>
  )
}

export default UseReduserDemo