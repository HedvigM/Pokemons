import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const List = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setPokemons(data.results);
      });
  }, []);

  return (
    <Container>
      <PokemonList>
        <h1>Pokemon List</h1>
        {pokemons.map((pokemon) => (
          <p>{pokemon.name}</p>
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
