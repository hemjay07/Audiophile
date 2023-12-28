import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #d97d4a;
  color: white;
  padding: 15px;
  border-radius: 5px;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1;
  animation: slideIn 0.5s ease-in-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
export default function () {
  return <StyledDiv>Item Added to Cart</StyledDiv>;
}
