import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductList = () => {
    let Navi = useNavigate()
    const products=[
        {
            id:1,
            name: "iphone 16",
            price: 80000,

        },
        {
            id:2,
            name: "Samsung S26",
            price: 70000,

        },
        {
            id:3,
            name: "Oneplus 16",
            price: 50000,

        },
    ]
    function fun(id){
        Navi(`/p/${id}`)
    }
  return (
    <div>
        {products.map((a)=>{
            return (
                <>
                <li onClick={()=>fun(a.id)}>{a.name}</li>
                </>
            )
        })}
    </div>
  )
}

export default ProductList
