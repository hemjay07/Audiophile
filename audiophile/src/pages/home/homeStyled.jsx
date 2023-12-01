import styled from "styled-components";
export const HomeContainer = styled.div`
  position: relative;
`;
export const Hero = styled.div`
  //   flex-grow: 1;
  // min-height: 700px;
  // max-width: 2100px;
  padding: 0 10%;

  // overflow: hidden;
  // border: 2px solid red;

  margin: auto;
  color: white;
  background-color: #0e0f0f;
  display: flex;
  // overflow: hidden;
  @media (max-width: 1250px) {
    padding-top: 7rem;
    flex-direction: column;
    // padding: 2rem 0;
    // border: 2px solid red;
    text-align: center;
    position: relative;
    background-color: transparent;
    padding: 15% 10%;
  }
`;
export const HeroContent = styled.div`
  margin: auto;

  h1 {
    color: #fff;
    font-family: Manrope;
    font-size: 3.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.625rem; /* 103.571% */
    letter-spacing: 0.125rem;
    text-transform: uppercase;
  }
  p {
    margin-bottom: 1.5rem;
    opacity: 0.75;
  }
  h3 {
    font-family: Manrope;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.625rem;
    text-transform: uppercase;
    margin-bottom: 2.5rem;
    // border: 2px solid red;
    opacity: 0.4964;
  }
  button {
    background: #d87d4a;
    color: #fff;
    &:hover {
      background-color: #fbaf85;
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    h1 {
      text-align: center;
      font-size: 2.25rem;
      line-height: 2.5rem; /* 111.111% */
      letter-spacing: 0.08038rem;
      margin-bottom: 1rem;
    }
  }
`;
export const HeroImage = styled.picture`
  img {
    // max-width: 700px;
    width: 650px;
    height: 600px;
    @media (max-width: 1250px) {
      // border: solid 5px yellow;
      position: absolute;
      height: 600px;
      width: 100%;
      max-width: 600px;

      z-index: -1;
      top: -7rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
export const BlackBackground = styled.div`
  @media (max-width: 1250px) {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #0f0f0f;
    top: 0;
    left: 0;
  }
`;

export const ZX9Speaker = styled.div`
  margin: auto;
  width: 80%;
  max-width: 2100px;
  background: #d87d4a;
  border-radius: 0.5rem;
  padding-top: 2rem;
  display: grid;
  grid-auto-columns: 1fr;
  overflow: hidden;
  grid-template-areas:
    "one two"
    "three three";

  :nth-child(1) {
    grid-area: one;
  }
  :nth-child(2) {
    grid-area: two;
  }
  height: min-content;
  @media (max-width: 1250px) {
    :nth-child(2) {
      grid-area: three;
    }
  }
`;
export const ZX9SpeakerImages = styled.div`
  position: relative;
  // border: solid 4px green;

  img:nth-of-type(1) {
    position: relative;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 10rem;
    height: 12rem;
    margin-left: 50%;
    // transform: translateX(-50%);
  }
  img:nth-of-type(2) {
    // position: absolute;
    top: -10rem;
    left: -10rem;
    // border: solid 2px red;
    width: 34rem;
    height: 34rem;
    // bottom: 0;
    z-index: 1;
    // left: 0;
    margin-left: 50%;
    position: absolute;
  }
  @media (min-width: 768px) {
    img:nth-of-type(1) {
      transform: translateX(50%);
    }
    img:nth-of-type(2) {
      left: -5rem;
    }
  }
  @media (min-width: 1250px) {
    img:nth-of-type(1) {
      left: 7rem;
      width: 25rem;
      height: 30rem;
      margin: 0;
      transform: none;
    }
    img:nth-of-type(2) {
      width: 55rem;
      height: 59rem;
      margin: 0;
    }
  }
`;
export const ZX9SpeakerDescription = styled.div`
  padding: 2rem 1rem;
  text-align: left;
  display: flex;
  z-index: 3;
  flex-direction: column;
  gap: 2rem;
  h2 {
    color: white;
  }
  p {
    color: #fff;
    opacity: 0.75;
    max-width: 17rem;
  }
  button {
    background: black;
    color: #fff;
    &:hover {
      background-color: #4c4c4c;
      cursor: pointer;
    }
  }
  @media (max-width: 1250px) {
    align-items: center;
    text-align: center;
    gap: 1.5rem;
  }
`;

export const SampleProducts = styled.div``;

export const ZX7Speaker = styled.div`
  width: 80%;
  max-width: 2100px;
  margin: auto;
  margin-top: 2rem;
  position: relative;
  border-radius: 0.5rem;
`;
export const ZX7SpeakerImage = styled.picture`
  img {
    width: 100%;
  }
`;
export const ZX7SpeakerDescription = styled.div`
  width: 100%;
  max-width: 2100px;
  height: 100%;
  position: absolute;
  top: 30%;
  left: 5%;
  button {
    margin-top: 1rem;
    border: solid 1px black;
    &:hover {
      background-color: #000000;
      cursor: pointer;
      color: white;
    }
  }
  h2 {
    font-size: 1.75rem;
  }
  @media (min-width: 768px) {
    left: 10%;
  }
`;
export const YX1Earphones = styled.div`
  // border: solid 2px red;
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 2100px;
  justify-content: space-between;
  margin: auto;
  margin-top: 2rem;
  h2 {
    font-size: 1.5rem;
  }
  button {
    &:hover {
      background-color: #000000;
      cursor: pointer;
      color: white;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const YX1EarphonesImage = styled.img`
  // border: solid 2px red;
  // flex: 1;
  border-radius: 0.5rem;
  @media (min-width: 768px) {
    height: 20vw;
    width: 48%;
  }
`;
export const YX1EarphonesDescription = styled.div`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding: 2rem;
  background: #f1f1f1;
  text-align: left;
  button {
    border: solid 1px black;
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    height: 20vw;
    margin-top: 0;
    width: 48%;
  }
`;
