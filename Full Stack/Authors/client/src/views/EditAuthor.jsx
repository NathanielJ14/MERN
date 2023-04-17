import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from "react-router-dom"



const EditAuthor = () => {
    const { id } = useParams()

    const navigate = useNavigate()

    const [name, setName] = useState("")
    


    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response => {
                const author = response.data
                setName(author.name)
            })
            .catch(err => console.log(err))
    }, [id])



    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedAuthor = {name}
        axios.put(`http://localhost:8000/api/authors/${id}`, updatedAuthor)
            .then(response=>{
                navigate(`/`)
            })
            .catch(err=>console.log(err))
    }


    return (
        <div>
            <Link to={`/`}>Home</Link>
            <h2>Edit this author</h2>
            
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Name: </label>
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                </p>

                <button type='submit'>Update</button>

            </form>
            
            <button> <Link to={`/`} >Cancel</Link> </button>
        </div>
    )
}

export default EditAuthor