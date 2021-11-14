import React from "react";
import styled from "styled-components";

export const Spinner = () => {
    return ()
}


const loadingOverlay = styled.div `
    position:absolute;
    top: 0;
    right: 0;
    bottom:0;
    left:0;
    background: #c4c1c1;
    display:flex;
    justify-content: center;
    align-items: center;
  `; 


  const loadingSpinner = styled.div`
    width: 50px;
    height:50px;
    border: 2px solid #fa9696;
    border-left: 2px solid #c4c1c1;
    animation: spinner infinite 1.0s;
  
    @keyframes spinner {
        0% {
          transform:rotate(0);
        }
        25% {
          transform:rotate(90deg);
        }
        50% {
          transform:rotate(180deg);
        }
        75% {
          transform:rotate(270deg);
        }
        100% {
          transform:rotate(360deg);
        }
      }
    `