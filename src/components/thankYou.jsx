import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { cartContext } from "../App";
import styled from "styled-components";
import Overlay from "./overlay";
import Tick from "/assets/checkout/icon-order-confirmation.svg";
import SampleImage from "/assets/cart/image-xx59-headphones.jpg";
import productData from "../data.json";
import { figureOutProductsActualName } from "../pages/productDetail/productDetail";
// import { Navigate } from "react-router-dom";

const StyledDiv = styled.div`
  position: absolute;
  max-width: 90vw;
  width: 23rem;
  //   height: 37.5rem;
  max-height: 95vh;

  z-index: 3;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  background: #fff;
  padding: 1.5rem;
  //   padding-right: 0;
  border-radius: 0.5rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.75rem;
    letter-spacing: 0.05356rem;
    margin-top: 1.5rem;
  }

  button {
    width: 100%;
    background: #d87d4a;
    color: #fff;
    margin: 3rem 0 3rem 0;
  }

  > p:first-of-type {
    font-size: 0.9375rem;
    font-weight: 500;
    line-height: 1.5625rem;
    margin: 1rem 0 1.5rem 0;
    opacity: 0.5;
  }
  @media (min-width: 768px) {
    width: 33.75rem;
  }
`;
const Items = styled.div`
  position: relative;

  padding: 1rem;
  background: #f1f1f1;
  border-radius: 0.5rem 0.5rem 0 0;
  text-align: center;
  img {
    width: 4rem;
    height: 4rem;
  }
  display: flex;
  align-items: center;
  gap: 0.5rem;
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 80%;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    transform: translateX(-50%);
  }
`;
const ItemPrice = styled.div`
  p:nth-of-type(2) {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.5625rem; 
    opacity:0.5
`;
const Multiple = styled.p`
  margin-left: auto;
  opacity: 0.5;
  color: #000;
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 1.5625rem;
`;
const GrandTotal = styled.div`
  padding: 1rem;
  background: #000;
  color: white;
  > p:nth-of-type(1) {
    opacity: 0.5;
  }
  border-radius: 0 0 0.5rem 0.5rem;
`;
const ItemAndGrandTotal = styled.div`
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    // border: solid 2px red;
    justify-content: stretch;
    > :first-child {
      flex: 1;
      border-radius: 0.5rem 0 0 0.5rem;
    }
    > :last-child {
      flex: 1;
      text-align: center;
      padding: 2.5rem 0rem;
      border-radius: 0 0.5rem 0.5rem 0;
      p:last-child {
        font-size: 1.125rem;
        font-weight: 700;
        line-height: normal;
        margin-top: 1rem;
      }
    }
  }
`;

const Others = styled.p`
  //   border: solid 2px red;
  padding: 1rem;
  background: #f1f1f1;
  text-align: center;
  opacity: 0.5;
`;
export default function ({ total }) {
  const navigate = useNavigate();
  const [thankYou, setThankYou] = useState(true);
  const { cart } = useContext(cartContext);
  // let total = 0;
  const shippingFee = 50;
  let vat = total / 10;
  let grandTotal = total + shippingFee + vat;
  const firstItemData = Object.entries(cart)[0];

  const totalNumberInCart = Object.entries(cart).length;
  return (
    <>
      {thankYou ? (
        <>
          <StyledDiv>
            <img src={Tick} />
            <h2>THANK YOU FOR YOUR ORDER</h2>
            <p>You will receive an email confirmation shortly.</p>
            <ItemAndGrandTotal>
              <div>
                {productData
                  .filter((item) => item.id == firstItemData[0])
                  .map((thisProduct, index) => {
                    return (
                      <Items key={index}>
                        <img src={thisProduct.image.cartImage} alt="" />
                        <ItemPrice>
                          <p>{figureOutProductsActualName}</p>
                          <p>${thisProduct.price.toLocaleString("en-US")}</p>
                        </ItemPrice>
                        <Multiple>x{firstItemData[1]}</Multiple>
                      </Items>
                    );
                  })}

                <Others>and {totalNumberInCart - 1} other item(s)</Others>
              </div>
              <GrandTotal>
                <p>GRAND TOTAL</p>
                <p>${grandTotal.toLocaleString("en-US")}</p>
              </GrandTotal>
            </ItemAndGrandTotal>

            <button onClick={() => navigate("/")}>BACK TO HOME</button>
          </StyledDiv>
          <Overlay callback={setThankYou} />
        </>
      ) : null}{" "}
    </>
  );
}
