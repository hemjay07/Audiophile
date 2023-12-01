import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledH5 = styled.h5`
  width: 80%;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.5625rem;
  opacity: 0.5;
  margin: 1rem auto;

  cursor: pointer;
  &:hover {
    color: #d87d4a;
    opacity: 1;
  }
`;

export default function () {
  const navigate = useNavigate();
  return <StyledH5 onClick={() => navigate(-1)}>Go Back</StyledH5>;
}
