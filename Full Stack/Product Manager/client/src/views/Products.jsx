import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductList from '../components/ProductList'
import ProductForm from '../components/ProductForm'


const Products = () => {
    const [productList, setProductList] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(response => {
                console.log(response.data)
                setProductList(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    const removeFromList = (deleteId) => {
        const filteredList = productList.filter((eachProd) => eachProd._id !== deleteId)
        setProductList(filteredList)
    }

    


    return (
        <div>
            <ProductForm />
            <h1>All Products:</h1>
            <ProductList productList={productList} onDelete={removeFromList} />
        </div>
    )
}

export default Products