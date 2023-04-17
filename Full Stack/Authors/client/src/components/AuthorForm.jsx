import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const AuthorForm = () => {
    const [name, setName] = useState("")
    const [author, setAuthor] = useState([])

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        const newAuthor = { name }
        axios.post('http://localhost:8000/api/authors', newAuthor)
            .then(response => {
                console.log(response)
                setAuthor([...author, response.data])
                setName('')
                navigate(`/`)
            })
            .catch(error => {
                console.log(error)
            })
    }

    


    return (
        <div>
            <h2>Add a new author:</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Name: </label>
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                </p>

                <button type='submit'>Submit</button>

            </form>

            <button> <Link to={`/`} >Cancel</Link> </button> 

        </div>

    )
}

export default AuthorForm;