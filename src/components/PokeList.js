import React from 'react';
import Pokemon from './Pokemon';

const PokeList = props => {
    return <ul className="poke-list">
        {props.pokemons.map((pokemons, index) => {
            return <li key={index}>
                <Pokemon 
                    imgUrl={pokemons.url}
                    pokemonName={pokemons.name}
                    typesArray={pokemons.types}
                />
            </li>
        })}
    </ul>
}

export default PokeList;
