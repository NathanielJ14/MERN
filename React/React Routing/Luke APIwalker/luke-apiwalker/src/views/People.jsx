import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const People = () => {
    const {id} = useParams()
    const [people, setPeople] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response=>{
                console.log(response.data)
                setPeople(response.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])


    return (
        <div>
            <h1>People</h1>
            {
                people?
                <div>
                    <h2>Name: {people.name}</h2>
                    <p>Height: {people.height}</p>
                    <p>Gender: {people.gender}</p>
                    <p>Eye Color: {people.eye_color}</p>
                </div>:
                <div>
                    <h2>These aren't the droids you're looking for</h2>
                    <img src="https://www.slashfilm.com/img/gallery/obi-wan-kenobi-complete-cast-character-guide-for-the-disney-series/l-intro-1653675305.jpg" alt="ObiWan Kenobi" />
                </div>
                
            }
        </div>
    )
}

export default People