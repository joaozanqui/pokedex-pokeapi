import React from 'react';

// Criacao da lista de pokemons
const PokemonList = ({ pokemons, selectPokemon }) => {
  return (
    // Animacao enquanto nao achar pokemons
    (typeof pokemons === 'undefined') ? (
      <div className='d-flex flex-column align-items-center'>
        <h3>Carregando...</h3>
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    ) : (
      pokemons.map((pokemon, i) => (
        // Criacao das box de pokemons
        <button
          type="button"
          className="btn btn-outline-primary m-2 border-5 rounded-5"
          data-mdb-ripple-init
          data-mdb-ripple-color="dark"
          onClick={() => selectPokemon(pokemon)}
          key={i}
        >
          <p>{pokemon.id}</p>
          <div className='d-flex flex-column align-items-center'>
            <img src={pokemon.image} alt={pokemon.name} className='img-fluid' />
            <p>{pokemon.name}</p>
          </div>
        </button>
      ))
    )
  );
}

export default PokemonList;
