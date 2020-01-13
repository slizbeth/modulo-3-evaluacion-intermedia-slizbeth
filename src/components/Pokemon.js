import React from 'react';

const Pokemon = props => {
    return <div className="pokemon-container">
        <img className="poke-img" src={props.imgUrl} alt={props.pokemonName}/>
        <h2 className="poke-name">{props.pokemonName}</h2>
        <ul className="poke-list">
            {props.typesArray.map((type, index) => <li className="poke-list-li" key={index}>{type}</li>)}
        </ul>
    </div>
}
export default Pokemon;