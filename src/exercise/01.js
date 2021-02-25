// Simple Data-fetching
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import { fetchPokemon, PokemonDataView, PokemonErrorBoundary } from '../pokemon'

let pokemon;

// define the promise
// set the defined value above within the success handler 
const pokeMonPromise = fetchPokemon('pikachu').then(resolvedValue => (pokemon = resolvedValue))

function PokemonInfo() {
  if (!pokemon) {
    // if fetching
    // then render suspense fallback loading
    throw pokeMonPromise;
  }

  // if pokemon has been set 
  // then render
  return (
    <div>
      <div className="pokemon-info__img-wrapper">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  )
}

function App() {
  return (
    <div className="pokemon-info-app">
      <div className="pokemon-info">
        <PokemonErrorBoundary>
          <React.Suspense fallback={<div>Fetching pikachu</div>}>
            <PokemonInfo />
          </React.Suspense>
        </PokemonErrorBoundary>
      </div>
    </div>
  )
}

export default App
