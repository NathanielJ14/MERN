import React, { useState } from 'react';
import DisplayPokemon from './DisplayPokemon';


const FetchPokemon = () => {
    const [pokemons, setPokemons] = useState([])

    const fetchPokemonThen = () => {
            fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
                .then(response => response.json())
                .then(jsonResponse => {
                    console.log(jsonResponse)
                    setPokemons(jsonResponse.results)
                })
                .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Get Pokemon</h1>
            <button onClick={fetchPokemonThen}>Fetch All Pokemon</button>
            <DisplayPokemon pokemons={pokemons} />
        </div>
    )

}


export default FetchPokemon