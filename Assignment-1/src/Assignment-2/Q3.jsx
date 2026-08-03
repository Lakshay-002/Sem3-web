import React, { useState } from 'react'

const Q3 = () => {
    const [data, updateData] = useState([]);
    const[user,updateUser] = useState(1);

    useEffect(()=>{
                fetch('https://jsonplaceholder.typicode.com/todos')
                .then ((rawData) =>  {return rawData.json()})
                .then( (data)=>{
                    updateData(data);
                })
        }, [])

  return (
    <div>
        <button onClick={()=>updateUser(1)} >Show user 1</button>
        <button onClick = {()=>updateUser(2)}>Show user 2</button>
        <button onClick = {()=>updateUser(3)} >Show user 3</button>

        {
            data.filter(value => value.userId == user).map((value) =>{
               
               return <p key={value.id}>{value.id+" "+value.title}</p>
            })
        }
    </div>
  )
}

export default Q3