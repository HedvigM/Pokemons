import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Details = () => {
  const [details, setDetails] = useState({});
  /* const [loading, setLoading] = useState(true eller false); 
  LÄGG TILL LOADING NÄR JAG HAR TID*/
  const { pokemon } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [pokemon]);

  return (
    <div>
      <h1>The detail site!</h1>
      <h2>Name : {details.name}</h2>
      <h2>Height : {details.height}</h2>
      <h2>Weight : {details.weight}</h2>
      <img
        src={
          details.sprites
            ? details.sprites.other['official-artwork'].front_default
            : ''
        }
      />
    </div>
  );
};
