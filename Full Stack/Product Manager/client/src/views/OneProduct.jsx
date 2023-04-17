import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { OneProductDiv } from '../components/OneProductDiv'
import { Link } from "react-router-dom"



const Product = () => {
    const {id} = useParams()

    const [product, setProduct] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response=>{
                setProduct(response.data)
            })
            .catch(err=>console.log(err))
    }, [id])

    return (
        <div>
            <Link to={`/`}>All Products</Link>
            { product&&
                <OneProductDiv product={product}/>
            }
            
        </div>
    )
}

export default Product