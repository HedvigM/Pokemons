import React, { useState, useEffect } from 'react';

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
    <div>
      <h1>Pokemon List</h1>
      {pokemons.map((pokemon) => (
        <div>{pokemon.name}</div>
      ))}
    </div>
  );
};

export default List;
