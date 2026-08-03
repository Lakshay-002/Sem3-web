import React, { useEffect, useState } from 'react'

const Q5 = () => {
    const [data, updateData] = useState([])
      const[removeId , updateRemove] = useState([]);
    const[input, updateInput] = useState("");

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(rawData => rawData.json())
        .then(data => updateData(data) )
    },[])

  return (
    <div>
        <input type="text" value={input} onChange={(e) => updateInput(e.target.value)} />
         {
            data.filter(value => value.title.includes(input)).filter( value => !(removeId.includes(value.id))).map((value)=>{
               return <p key={value.id}> {value.title}  <button onClick = {()=>  updateRemove([...removeId , value.id])}>Remove this</button></p>
            })

        }
    </div>
  )
}

export default Q5