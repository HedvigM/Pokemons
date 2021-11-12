import React from 'react';
import styled from 'styled-components';

export const Button = () => {
  return (
    <div>
      <PartyButton>Party Button</PartyButton>
    </div>
  );
};

const PartyButton = styled.button`
  background-color: var(--main-color);
  color: black;
  width: 150px;
  padding: 16px;
  font-size: 15px;
  border-radius: 4px;
  border: none;
  transition-duration: 0.4s;
  box-shadow: none;
  margin: 10px;
  font-family: var(--secondary-font);

  :hover {
    background-color: white;
    color: var(--secondary-color);
    transition-duration: 0.4s;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
