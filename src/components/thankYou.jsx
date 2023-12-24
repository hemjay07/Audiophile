import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import productData from "../data.json";
import Overlay from "./overlay";
import Tick from "/assets/checkout/icon-order-confirmation.svg";
import { figureOutProductsActualName } from "../pages/productDetail/productDetail";
import { useCartContext } from "../context/cartContext";

const StyledDiv = styled.div`
  position: absolute;
  max-width: 90vw;
  width: 23rem;
  max-height: 95vh;
  z-index: 3;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  background: #fff;
  padding: 1.5rem;
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
  padding: 1rem;
  background: #f1f1f1;
  text-align: center;
  opacity: 0.5;
`;
export default function ({ total }) {
  // Use react-router-dom's "useNavigate" for navigation between pages
  const navigate = useNavigate();
  // useState to toggle the thank you message
  const [thankYou, setThankYou] = useState(true);
  // Getting cart data from the context API
  const { cart, se } = useCartContext();
  // Defining a constant shipping fee
  const shippingFee = 50;
  // Calculating VAT as 1/10th of the total amount
  let vat = total / 10;
  // Evaluating the grand total as sum of total amount, shipping fee and VAT
  let grandTotal = total + shippingFee + vat;
  // Extracting the first item's data from the cart
  const firstItemData = Object.entries(cart)[0];

  // Getting the total number of items in the cart
  const totalNumberInCart = Object.entries(cart).length;

  // Scroll to the top of the page to display the thank you message
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  // navigate to the home page and reset the cart
  function handleClick() {
    navigate("/");
    setCart({});
  }

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
                {/* Purge through the product data and match the cart item with the product list */}
                {productData
                  .filter((item) => item.id == firstItemData[0] || "")
                  .map((thisProduct, index) => {
                    return (
                      <Items key={index}>
                        <img src={thisProduct.image.cartImage} alt="" />
                        <ItemPrice>
                          <p>{figureOutProductsActualName}</p>
                          {/* Format the product's price to locale string for better readability */}
                          <p>${thisProduct.price.toLocaleString("en-US")}</p>
                        </ItemPrice>
                        <Multiple>x{firstItemData[1]}</Multiple>
                      </Items>
                    );
                  })}
                {/* Display the count of other items in the cart */}
                {totalNumberInCart > 1 ? (
                  <Others>and {totalNumberInCart - 1} other item(s)</Others>
                ) : (
                  <Others>and ❤️</Others>
                )}
              </div>
              <GrandTotal>
                <p>GRAND TOTAL</p>
                {/* Format the grand total to locale string for better readability */}
                <p>${grandTotal.toLocaleString("en-US")}</p>
              </GrandTotal>
            </ItemAndGrandTotal>

            {/* Navigate back to the home page on clicking the button */}
            <button onClick={handleClick}>BACK TO HOME</button>
          </StyledDiv>
          {/* Using the callback function to unset thank you message */}
          <Overlay callback={setThankYou} />
        </>
      ) : null}
    </>
  );
}
