import styled from "styled-components";

export const StyledFormAndSummary = styled.div`
  width: 80%;
  margin: 1.5rem auto;
  gap: 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 1240px) {
    margin: 3rem auto;
    flex-direction: row;
    align-items: start;

    > :nth-child(1) {
      flex: 2;
    }

    > :nth-child(2) {
      flex: 1;
    }
  }
`;

export const StyledForm = styled.form`
  background: #fff;
  border-radius: 0.5rem;
  padding: 1.4rem;

  h3 {
    color: #d87d4a;
    font-size: 0.8125rem;
    line-height: 1.5625rem; /* 192.308% */
    letter-spacing: 0.05806rem;
    margin: 2rem 0 1rem 0;
  }

  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    letter-spacing: 0.0625rem;
  }

  label {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: -0.01338rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;

    :nth-child(2) {
      grid-column: 1/3;
    }

    :nth-child(6) {
      grid-column: 1/3;
    }

    :nth-child(7) {
      grid-column: 1/3;
    }

    :nth-child(11) {
      grid-column: 1/3;
    }

    :nth-child(12) {
      grid-column: 1/2;
      grid-row: span 2;
    }
  }
`;

export const RadioDiv = styled.div`
  margin-bottom: 1rem;
  padding: 1rem 0 0 1rem;
  border: 1px solid #cfcfcf;
  border-radius: 0.5rem;
  gap: 1.2rem;
  display: flex;

  :nth-child(1) {
  }

  label {
    font-size: 0.875rem;
    letter-spacing: -0.01563rem;
  }

  input {
    margin: 0;
  }
`;

export const PaymentMethod = styled.h3`
  color: #000 !important;
  font-family: Manrope;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.01338rem;
  margin-bottom: 0.5rem !important;
`;
