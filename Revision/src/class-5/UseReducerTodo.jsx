import React, { useReducer } from 'react'

const UseReducerTodo = () => {
    let data={
        input:"",
        list:[] 
    }
    function reduser(state,action){
        if(action.type=="inp"){
            return{
                ...state,
                input:action.payload
            }
        }
         else if(action.type=="add"){
            return{
               ...state,
               list:[...state.list , state.input]
            }

        }
    }
    let[state,dispatch]=useReducer(reduser,data);
  return (
    <div>
        <input onChange={(e)=>dispatch({type:"inp",payload:e.target.value})}/>
        <button onClick={()=>dispatch({type:"add"})}>add</button>
        { state.list.map((a)=>{
            return(<>
            <li>{a}</li>
            </>)
        })}




    </div>
  )
}

export default UseReducerTodo