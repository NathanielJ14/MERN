import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"


const ProductList = (props) => {

    const {productList} = props

    const navigate = useNavigate()
    
    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
            .then(response=>{
                props.onDelete(deleteId)
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            
            <ul>
                {
                    productList.map((eachProd, idx)=>(
                        <li key={idx}>
                            <Link to={`/products/${eachProd._id}`}>{eachProd.title} </Link>   
                            <Link to={`/products/${eachProd._id}/edit`}>Edit</Link>   
                            <button onClick={()=>handleDelete(eachProd._id)} >Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductList