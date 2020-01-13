import React from 'react';
import Pokemon from './Pokemon';

const PokeList = props => {
    console.log(props);
    return <ul className="poke-list">
        {props.pokemons.map(pokemons => {
            return <li key={pokemons.id}>
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
