import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"


const Planet = () => {
    const {id} = useParams()
    const [planet, setPlanet] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response=>{
                console.log(response.data)
                setPlanet(response.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])


    return (
        <div>
            <h1>Planet</h1>
            {
                planet?
                <div>
                    <h2>Name: {planet.name}</h2>
                    <p>Climate: {planet.climate}</p>
                    <p>Gravity: {planet.gravity}</p>
                    <p>Population: {planet.population}</p>
                </div>:

                <div>
                    <h2>These aren't the droids you're looking for</h2>
                    <img src="https://www.slashfilm.com/img/gallery/obi-wan-kenobi-complete-cast-character-guide-for-the-disney-series/l-intro-1653675305.jpg" alt="ObiWan Kenobi" />
                </div>
            }
        </div>
    )
}

export default Planet