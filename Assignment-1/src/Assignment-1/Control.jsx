import React from 'react'

const Control = (props) => {
  return (
    <>
    <button onClick={()=>props.setCount(props.count+1)}>Add</button>
    <button onClick={()=>props.setCount(props.count-1)}>sub</button>
    </>
  )
}

export default Control