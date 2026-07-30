import React, { useState, useEffect } from 'react'

const UseEffectDemo = () => {
    // const [count, setCount] = useState(0)
    // const [city, setCity] = useState('Bombay')
    let[apiData,setApiData]=useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
            return res.json()
        }).then((data) => {
            console.log("ahdhek")
            console.log(data);
            setApiData(data)
        })
    },[])
  return (
   <>
   <div>
    {apiData.map((a) => (
        <h2 >{a.id +" "+a.title}</h2>
    ))}
    {/* <button onClick={()=> setCount(count+1)}>click</button>
    <button onClick={()=> setCity('pune')}>click</button> */}
   </div>
   </>
  )
}

export default UseEffectDemo