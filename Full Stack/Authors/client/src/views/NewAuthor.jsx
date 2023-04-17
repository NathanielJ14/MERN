import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AuthorForm from '../components/AuthorForm'
import { Link } from "react-router-dom"



const NewAuthor = () => {
    const [authorList, setAuthorList] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(response => {
                console.log(response.data)
                setAuthorList(response.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <Link to={`/`}>Home</Link>
            <AuthorForm />
        </div>
    )
}

export default NewAuthor