import React from 'react'

const StudentCard = (props) => {
  return (
    <div>
       <h3>Name: {props.name}</h3> 
        <p>Roll no.: {props.rollNo}</p>
        <p>Course: {props.course}</p>
    </div>
  )
}

export default StudentCard
