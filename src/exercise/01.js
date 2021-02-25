// Simple Data-fetching
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import { fetchPokemon, PokemonDataView } from '../pokemon'

let pokemon;

// define the promise
// set the defined value above within the success handler 
const pokeMonPromise = fetchPokemon('pikachu').then(resolvedValue => (pokemon = resolvedValue))

function PokemonInfo() {
  // 🐨 if there's no pokemon yet, then throw the pokemonPromise
  // 💰 (no, for real. Like: `throw pokemonPromise`)
  // if the code gets it this far, then the pokemon variable is defined and
  // rendering can continue!

  // if pokemon has been set 
  // then render
  if (pokemon) {
    return (
      <div>
        <div className="pokemon-info__img-wrapper">
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <PokemonDataView pokemon={pokemon} />
      </div>
    )
  }

  // if fetching
  // then render suspense fallback loading
  throw pokeMonPromise;
}

function App() {
  return (
    <div className="pokemon-info-app">
      <div className="pokemon-info">
        <React.Suspense fallback={<div>Fetching pikachu</div>}>
          <PokemonInfo />
        </React.Suspense>
      </div>
    </div>
  )
}

export default App
