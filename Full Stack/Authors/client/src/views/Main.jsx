import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import AuthorList from '../components/Authors'


const Authors = () => {
    const [authorList, setAuthorList] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(response => {
                console.log(response.data)
                setAuthorList(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    const removeFromList = (deleteId) => {
        const filteredList = authorList.filter((eachAuthor) => eachAuthor._id !== deleteId)
        setAuthorList(filteredList)
    }

    


    return (
        <div>
            <Link to={`/new`}>Add an author</Link>

            <h2>We have quotes by:</h2>
            <AuthorList authorList={authorList} onDelete={removeFromList} />
        </div>
    )
}

export default Authors