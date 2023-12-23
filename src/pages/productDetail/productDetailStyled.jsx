import styled from "styled-components";
export const Description = styled.div`
  h2 {
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.0625rem;
  }

  p {
    max-width: 27rem;
    line-height: 1.5rem; /* 166.667% */
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 2.75rem; /* 110% */
      letter-spacing: 0.08931rem;
    }
  }
`;

export const ProductDisplay = styled.div`
  width: 80%;
  margin: auto;

  img {
    width: 100%;
    border-radius: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.25rem; /* 150% */
    letter-spacing: 0.05356rem;
    margin-bottom: 1.5rem;
  }

  h3 {
    color: #d87d4a;
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.625rem;
    margin-bottom: 1.5rem;
  }

  h4 {
    margin-top: 1.5rem;
    font-size: 1.125rem;
    font-weight: 700;
    letter-spacing: 0.08038rem;
    text-transform: uppercase;
  }

  p {
    margin-top: 1.5rem;
    opacity: 0.5;
    line-height: 1.5625rem; /* 166.667% */
  }
`;

export const MainProduct = styled.div`
  margin-bottom: 5.5rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-bottom: 7rem;
    flex-direction: row;
    gap: 4rem;

    picture {
      flex: 1;
    }

    div {
      flex: 1;
    }
  }
`;
export const AddToCartAndCounterControler = styled.div`
  margin-top: 2rem;
  width: 80%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
`;

export const AddToCart = styled.button`
  background: #d87d4a;
  height: 3rem;
`;

export const Features = styled.div`
  p {
    opacity: 0.5;
  }

  margin-bottom: 5.5rem;
`;

export const FeaturesAndInTheBox = styled.div`
  display: grid;

  @media (min-width: 768px) {
    grid-template-areas:
      "one one"
      "two three ";

    :nth-child(1) {
      grid-area: one;
    }

    :nth-child(2) {
      grid-area: two;
    }

    :nth-child(3) {
      grid-area: three;
    }
  }

  @media (min-width: 1240px) {
    grid-template-columns: 3fr 2fr;
    column-gap: 8rem;

    grid-template-areas:
      "one two"
      "one three ";

    :nth-child(1) {
      grid-area: one;
    }

    :nth-child(2) {
      grid-area: two;
    }

    :nth-child(3) {
      grid-area: three;
    }
  }
`;

export const InTheBox = styled.h2`
  margin: 0;
`;

export const Include = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    &:nth-of-type(1) {
      margin-right: 1.3rem;
      color: #d87d4a;
      font-size: 0.9375rem;
      font-weight: 700;
      line-height: 1.5625rem;
    }

    &:nth-of-type(2) {
      font-size: 0.9375rem;
      font-weight: 500;
      line-height: 1.5625rem;
      opacity: 0.5;
    }
  }
`;
export const Gallery = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 5.5rem;

  @media (min-width: 768px) {
    grid-template-areas:
      "one three"
      "two three ";

    :nth-child(1) {
      grid-area: one;
    }

    :nth-child(2) {
      grid-area: two;
    }

    :nth-child(3) {
      grid-area: three;
      height: 100%;
    }
  }
`;

export const AlsoLike = styled.h2`
  text-align: center;
  margin: 5.5rem 0 2rem 0;
`;

export const Others = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 3.5rem;
  margin-bottom: 5.5rem;

  button {
    background: #d87d4a;
  }

  h2 {
    margin-top: 2rem;
  
    
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0.7rem;
  }
`;
export const CounterControler = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  width: 7.5rem;
  background: #f1f1f1;

  button {
    width: unset;
    font-size: unset;
    font-style: normal;
    font-weight: unset;
    border: none;
    opacity: 0.25;
  }
`;
