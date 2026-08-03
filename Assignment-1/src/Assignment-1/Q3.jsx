import React from 'react'
import { useState } from 'react'
import Display from './Display'
import Control from './Control'

const Q3 = () => {
    const[count,setCount]=useState(0)
  return (
    <>
    <Display count={count} />
    <Control count={count} setCount={setCount} />

    </>
  )
}

export default Q3