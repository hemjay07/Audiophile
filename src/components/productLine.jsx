import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import headphonesThumbnail from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersThumbnail from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesThumbnail from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
const Products = styled.div`
  top: 0;
  width: 80%;
  max-width: 2100px;
  display: flex;
  align-items: center;
  padding: 7.5rem 0;
  margin: auto;
  justify-content: space-between;
  gap: 2.6rem;

  h3 {
    color: #000;
    font-size: 0.9375rem;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.06694rem;
  }

  div {
    text-align: center;
    position: relative;
    width: 20rem;
    height: 12rem;
    border-radius: 0.5rem;
    background: #f1f1f1;

    img {
      width: 9rem;
      height: 8rem;
      position: relative;
      top: -2.5rem;
    }
  }

  p {
    opacity: 0.5;
    margin-top: 0.5rem;
    font-size: 0.8125rem;
    &:hover {
      color: #d87d4a;
      opacity: 1;
    }
  }

  span {
    color: #d87d4a;
    opacity: 1;
    font-weight: 900;
    margin-left: 0.3rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 3.5rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: #d87d4a;
  }
`;
export default function ProductLine({ showMenu }) {
  return (
    <>
      <Products>
        <div>
          <img src={headphonesThumbnail} />

          <h3>HEADPHONES</h3>
          <StyledLink to="/headphones">
            <p>
              SHOP<span> > </span>{" "}
            </p>
          </StyledLink>
        </div>
        <div>
          <img src={speakersThumbnail} alt="" />
          <h3>SPEAKERS</h3>
          <StyledLink to="/speakers">
            <p>
              SHOP<span> > </span>{" "}
            </p>
          </StyledLink>
        </div>
        <div>
          <img src={earphonesThumbnail} alt="" />
          <h3>EARPHONES</h3>
          <StyledLink to="/earphones">
            <p>
              SHOP <span> > </span>
            </p>
          </StyledLink>
        </div>
      </Products>
    </>
  );
}
