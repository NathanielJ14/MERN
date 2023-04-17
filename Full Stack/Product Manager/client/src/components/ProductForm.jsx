import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const ProductForm = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(1)
    const [description, setDescription] = useState("")
    const [products, setProducts] = useState([])



    const handleSubmit = (e) => {
        e.preventDefault()
        const newProd = { title, price, description }
        axios.post('http://localhost:8000/api/products', newProd)
            .then(response => {
                console.log(response)
                setProducts([...products, response.data])
                setTitle('')
                setPrice(1)
                setDescription('')
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>
            <h2>Add a product</h2>
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

                <button type='submit'>Add Product</button>

            </form>
        </div>
    )
}

export default ProductForm;