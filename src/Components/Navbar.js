import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <>
      <NavContainer>
        <Link to='/'>
          <NavButton>back</NavButton>
        </Link>
        <Link to='/about'>
          <NavButton>about</NavButton>
        </Link>
      </NavContainer>
    </>
  );
};

const NavContainer = styled.div`
  display: flex;
  justify-content: right;
`;

const NavButton = styled.button`
  background-color: var(--main-color);
  color: black;
  width: 130px;
  padding: 5px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  transition-duration: 0.4s;
  box-shadow: none;
  margin: 10px;
  font-family: var(--button-font);

  :hover {
    background-color: white;
    color: var(--secondary-color);
    transition-duration: 0.4s;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
