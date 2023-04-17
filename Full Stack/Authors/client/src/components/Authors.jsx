import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"


const AuthorList = (props) => {

    const {authorList} = props
    
    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
            .then(response=>{
                props.onDelete(deleteId)
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            
            <table>
                <thead>
                    <th>
                        <tr>
                            <td>Authors</td>
                            <td>Actions</td>
                        </tr>
                    </th>
                </thead>

                <tbody>
                    {
                        authorList.map((eachAuthor, idx)=>(
                            <tr key={idx}>
                                <td>{eachAuthor.name}</td>   
                                <Link to={`/edit/${eachAuthor._id}`}>Edit</Link>
                                <button onClick={()=>handleDelete(eachAuthor._id)} >Delete</button>
                            </tr>
                        ))
                    }
                </tbody>
            </table>


        </div>
    )
}

export default AuthorList