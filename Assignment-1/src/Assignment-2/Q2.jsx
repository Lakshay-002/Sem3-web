import React, { useEffect, useState } from 'react'

const Q2 = () => {
    const [data , updateData] = useState([]);
       
    
    
    useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then ((rawData) =>  {return rawData.json()})
            .then( (data)=>{
                updateData(data);
            })
    }, [])
  return (
    <div>
        {
            data.slice(0,10).map((value)=>{
                return <p key={value.id}> {value.id +" "+value.title}</p>
            })
        }
    </div>
  )
}

export default Q2