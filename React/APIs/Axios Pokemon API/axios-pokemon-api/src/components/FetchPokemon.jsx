import React, {useState } from 'react';
import DisplayPokemon from './DisplayPokemon';
import axios from 'axios';

const FetchPokemon = () => {
    const [pokemons, setPokemons] = useState([])


    const fetchPokemonAxios = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                console.log(response.data.results)
                setPokemons(response.data.results)
            })
            .catch(err => console.log(err))
        }

        return (
            <div>
                <h1>Fetch Pokemon</h1>
                <button onClick={fetchPokemonAxios}>Fetch Pokemon with Axios</button>
                <DisplayPokemon pokemons={pokemons} /> 

            </div>
        )
}


export default FetchPokemon