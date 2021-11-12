import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);

  return (
    <Container>
      <PokemonList>
        <h1>Pokemon List</h1>
        {pokemons.map((pokemon) => (
          <Link
            key={pokemon.name}
            to={`/details/${pokemon.name}`}
            /*  className='pokemon-list' - ANVÄNDS INTE JUST NU */
          >
            <p>{pokemon.name}</p>
          </Link>
        ))}
      </PokemonList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 334px;
  max-width: 500px;
  margin: 0 auto;
  border: 2px solid pink;
`;
const PokemonList = styled.div`
  border: 2px solid lime;
  text-align: center;
`;

export default List;
