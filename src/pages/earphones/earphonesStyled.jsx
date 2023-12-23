import styled from "styled-components";
export const HeadphonesDisplay = styled.div`
  display: grid;
  width: 80%;
  margin: auto;
  text-align: center;

  img {
    width: 100%;
    border-radius: 0.5rem;
    margin: 2rem 0;
  }

  button {
    background-color: #d87d4a;
    color: white;
    &:hover {
      background-color: #fbaf85;
      cursor: pointer;
    }
  }

  p {
    line-height: 1.5625rem;
    font-size: 0.9375rem;
    opacity: 0.5;
  }

  h3 {
    color: #d87d4a;
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.625rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    p {
      width: 70%;
    }

    img {
      transform: scale(0.85);
      margin: 0;
    }
  }

  @media (min-width: 1240px) {
    margin-top: 4rem;

    grid-template-areas:
      "one two"
      "three four"
      "five six";

    :nth-child(3) {
      grid-area: four;
    }

    :nth-child(4) {
      grid-area: three;
    }

    img {
      margin: 0;
      padding: 3.5rem 2rem;
    }
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 7rem;

  @media (min-width: 1240px) {
    align-items: start;
    text-align: left;
    padding: 3.5rem 2rem;
    justify-content: center;
  }
`;
