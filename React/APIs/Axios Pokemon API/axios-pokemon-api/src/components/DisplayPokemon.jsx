import React from 'react'

const DisplayPokemon = ({ pokemons }) => {
    return (
        <div>
            <ul>
                {pokemons.map((pokemon, i) => (
                    <li key={i}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default DisplayPokemon