import React, { useEffect, useState } from 'react'

const Q4 = () => {
     const [data, updateData] = useState([]);
     const[removeId , updateRemove] = useState([]);
    useEffect(()=>{
                fetch('https://jsonplaceholder.typicode.com/todos')
                .then ((rawData) =>  {return rawData.json()})
                .then( (data)=>{
                    updateData(data);
                })
        }, [])
         
    function removeUser(id) {
        updateRemove([...removeId , id])
    }


  return (
    <div>
        {
            data.filter( value => !(removeId.includes(value.id))).map((value)=>{
               return <p key={value.id}> {value.title}  <button onClick = {()=> removeUser(value.id)}>Remove this</button></p>
            })

        }
    </div>
  )
}

export default Q4