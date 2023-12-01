import React, { useState } from "react";
import styled from "styled-components";

import hamburger from "/assets/shared/tablet/icon-hamburger.svg";
import cart from "/assets/shared/desktop/icon-cart.svg";
import logo from "/assets/shared/desktop/logo.svg";

import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
const IconWrapper = styled.div`
  // to add custom style to the each of the icon
  .socials__logo {
    font-size: 2rem;
    &:hover {
      color: #d87d4a;
      cursor: pointer;
    }
  }
`;
const Logo = styled.img`
  margin: auto;
  @media screen and (min-width: 770px) {
    margin: 0;
  }
`;
const Container = styled.div`
  text-align: center;
  background-color: black;
  color: white;
  margin: auto;
  margin-bottom: 0;

  padding: 3.5rem 10% 2.8rem 10%;
  display: grid;
  gap: 3rem;
  grid-auto-columns: 1fr;

  grid-template-areas:
    "one one"
    "two two"
    "three three"
    "four four"
    "five five";

  :nth-child(1) {
    grid-area: one;
  }
  :nth-child(2) {
    grid-area: two;
  }
  :nth-child(3) {
    grid-area: three;
  }
  :nth-child(4) {
    grid-area: four;
  }
  :nth-child(5) {
    grid-area: five;
  }

  @media screen and (min-width: 770px) {
    text-align: left;
    grid-template-areas:
      "one one"
      "two two"
      "three three"
      "four five";
  }
  @media screen and (min-width: 1440px) {
    text-align: left;
    grid-template-areas:
      "one two"
      "three five"
      "four four";
  }
`;

const Directories = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 0.8rem;
    font-weight: 700;
  }
  @media screen and (min-width: 770px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
    justify-content: space-around;
  }
`;

const Socials = styled.div`
  :nth-child(2) {
    margin: 0 1rem;
  }

  @media screen and (min-width: 700px) {
    margin-left: auto;
    margin-top: auto;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0.5;
`;

const Copyright = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  opacity: 0.5;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: #d87d4a;
  }
`;

export default function Footer() {
  return (
    <Container>
      <Logo src={logo} />
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
      <Description>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </Description>
      <Copyright>Copyright 2021. All Rights Reserved</Copyright>
      <Socials>
        <IconWrapper>
          <AiFillFacebook className="socials__logo" />
          <AiOutlineTwitter className="socials__logo" />
          <AiOutlineInstagram className="socials__logo" />
        </IconWrapper>
      </Socials>
    </Container>
  );
}
