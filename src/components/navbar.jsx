import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import hamburger from "/assets/shared/tablet/icon-hamburger.svg";
import cartImage from "/assets/shared/desktop/icon-cart.svg";
import logo from "/assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import CartItems from "./cart";
import Overlay from "./overlay";

// import ProductLine from "./productLine";
import headphonesThumbnail from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersThumbnail from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesThumbnail from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import { useCartContext } from "../context/cartContext";
const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: black;
  color: white;
  margin: auto;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  padding: 2rem 10%;
  z-index: 1; //so its positioned above the content of the page, remember the overlay is a part of the container

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 80%;
    border-bottom: solid 0.1px rgba(225, 225, 225, 0.1);
    transform: translateX(-50%);
  }

  h3 {
    color: #000;
    font-size: 0.9375rem;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.06694rem;
  }
`;

const Hamburger = styled.img`
  @media screen and (min-width: 1140px) {
    display: none;
  }
`;

const Directories = styled.div`
  color: black;
  display: none;
  gap: 4rem;

  h3 {
    color: #fff;
    font-size: 0.8125rem;
    font-weight: 700;
    line-height: 1.5625rem; /* 192.308% */
    letter-spacing: 0.125rem;
    &:hover {
      color: #d87d4a;
    }
  }

  @media screen and (min-width: 1140px) {
    display: flex;
  }

  h3 {
    font-size: 0.8rem;
    font-weight: 700;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    color: #d87d4a;
  }

  p {
    color: black;
  }
`;

const ProductsMenu = styled.div`
  z-index: 2;
  position: absolute;
  background-color: white;
  top: 100%;
  left: 0;
  width: 100%;
  max-width: 2100px;
  display: flex;
  align-items: center;
  padding: 7.5rem 1.5rem;
  margin: auto;
  justify-content: space-evenly;
  gap: 2rem;
  border-radius: 0 0 0.5rem 0.5rem;

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

const ProductsMenuOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.4;
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1; //so it is positioned most behind in the container
`;

const CartImg = styled.div`
  position: relative;
  display: flex;

  img {
    cursor: pointer;

    &:hover {
      color: #d87d4a;
      opacity: 1;
    }
  }

  p {
    position: absolute;
    top: -70%;
    right: 100%;
    color: #d87d4a;
  }
`;
/**
 * Navbar component.
 *
 * @returns {JSX.Element} The rendered Navbar component.
 */
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCartContext();
  const totalNumberInCart = Object.entries(cart).length;

  return (
    <Container>
      {/* Hamburger menu */}
      <Hamburger
        src={hamburger}
        onClick={() =>
          setShowMenu((prev) => {
            return !prev;
          })
        }
      />
      {/* Logo */}
      <img src={logo} onClick={() => navigate("/")} />
      {/* Navigation links */}
      <Directories>
        <StyledLink to="/">
          <h3>HOME</h3>
        </StyledLink>
        <StyledLink to="/headphones">
          <h3>HEADPHONES</h3>
        </StyledLink>
        <StyledLink to="/speakers">
          <h3>SPEAKERS</h3>
        </StyledLink>
        <StyledLink to="/earphones">
          <h3>EARPHONES</h3>
        </StyledLink>
      </Directories>
      {/* Cart */}
      <CartImg>
        <img onClick={() => setShowCart((prev) => !prev)} src={cartImage}></img>
        <p>{totalNumberInCart}</p>
      </CartImg>

      {/* Products menu */}
      {showMenu && (
        <>
          <ProductsMenu>
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
          </ProductsMenu>
          <Overlay callback={setShowMenu}></Overlay>
        </>
      )}

      {/* Cart items */}
      {showCart && (
        <>
          <CartItems />
          <Overlay callback={setShowCart}></Overlay>
        </>
      )}
    </Container>
  );
}
