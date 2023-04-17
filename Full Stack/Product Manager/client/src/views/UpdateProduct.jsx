import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from "react-router-dom"



const UpdatePage = () => {
    const { id } = useParams()

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(1)
    const [description, setDescription] = useState("")


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                const prod = response.data
                setTitle(prod.title)
                setPrice(prod.price)
                setDescription(prod.description)
            })
            .catch(err => console.log(err))
    }, [id])



    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedProd = {title, price, description}
        axios.put(`http://localhost:8000/api/products/${id}`, updatedProd)
            .then(response=>{
                navigate(`/products/${id}`)
            })
            .catch(err=>console.log(err))
    }

    const handleDelete = (e) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(response=>{
                navigate('/')
            })
            .catch(err=>console.log(err))
    }


    return (
        <div>
            <Link to={`/`}>All Products</Link>
            <h1>Update Product </h1>
            
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Title: </label>
                    <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                </p>

                <p>
                    <label>Price: </label>
                    <input type="number" name="price" value={price} onChange={e => setPrice(e.target.value)} />
                </p>

                <p>
                    <label>Description: </label>
                    <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} />
                </p>

                <button type='submit'>Update</button>
            </form>
            <button onClick={()=>handleDelete()} >Delete</button>
        </div>
    )
}

export default UpdatePage