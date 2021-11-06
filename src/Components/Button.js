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
  background-color: #e9967a;
  color: black;
  width: 130px;
  padding: 16px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  transition-duration: 0.4s;
  box-shadow: none;
  margin: 10px;

  :hover {
    background-color: white;
    color: var(--secondary);
    transition-duration: 0.4s;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
