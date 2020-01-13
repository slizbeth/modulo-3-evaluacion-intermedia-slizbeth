import React from 'react';
import '../stylesheets/App.scss';
import pokemon from '../data/pokemon.json';
import PokeList from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonData: pokemon
    }
  }

  render() {
    //console.log(this.state);
    return (
      <div className="App">
        <h1>Mi lista de pokemon</h1>
        <PokeList pokemons={this.state.pokemonData}/>
      </div>
    );
  }
}

export default App;
