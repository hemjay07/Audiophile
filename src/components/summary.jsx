import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import productData from "../data.json";
import ThankYou from "./thankYou";
import { figureOutProductsActualName } from "../pages/productDetail/productDetail";
import { useCartContext } from "../context/cartContext";
const Summary = styled.div`
  padding: 2rem;
  background: #fff;
  width: 100%;
  border-radius: 0.5rem;

  h3 {
    font-size: 1.125rem;
    letter-spacing: 0.08038rem;
    margin-bottom: 2rem;
  }

  button {
    width: 100%;
    background: #d87d4a;
    color: #fff;
    text-align: center;
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.0625rem;
    margin-top: 2rem;
    &:hover {
      background-color: #fbaf85;
      cursor: pointer;
    }
  }
`;

const Items = styled.div`
  margin-bottom: 1rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ItemPrice = styled.div``;
const Multiple = styled.p`
  margin-left: auto;
  opacity: 0.5;
  color: #000;
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 1.5625rem;
`;

const Fees = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  p:first-of-type {
    font-size: 0.9375rem;

    font-weight: 500;
    line-height: 1.5625rem;
    opacity: 0.5;
  }

  p:last-of-type {
    font-size: 1.125rem;
    font-weight: 700;
    font-style: normal;
  }
`;
const GrandTotal = styled.p`
  color: #d87d4a;
`;

export default function ({ showThanks }) {
  const { cart } = useCartContext();
  let total = 0;
  const shippingFee = 50;
  let vat = total / 10;
  let grandTotal = total + shippingFee + vat;

  return (
    <div>
      <Summary>
        <h3>SUMMARY</h3>
        {Object.entries(cart).map((item, index) => {
          const thisProduct = productData.filter(
            (product) => product.id == item[0]
          )[0];
          const key = index;
          total = total + thisProduct.price * item[1];
          vat = total / 10;
          grandTotal = total + shippingFee + vat;
          const porductsActualName = figureOutProductsActualName(
            thisProduct.name
          );
          return (
            <Items key={key}>
              <img src={thisProduct.image.cartImage} alt="" />
              <ItemPrice>
                <p>{porductsActualName}</p>
                <p>${thisProduct.price.toLocaleString("en-US")}</p>
              </ItemPrice>
              <Multiple>x{item[1]}</Multiple>
            </Items>
          );
        })}

        <Fees>
          <p>TOTAL</p> <p>${total.toLocaleString("en-US")}</p>
        </Fees>
        <Fees>
          <p>SHIPPING</p>
          <p>${shippingFee.toLocaleString("en-US")}</p>
        </Fees>
        <Fees>
          <p>VAT(INCLUDED)</p>
          <p>${vat.toLocaleString("en-US")}</p>
        </Fees>
        <Fees>
          <p>GRAND TOTAL</p>
          <GrandTotal>${grandTotal.toLocaleString("en-US")}</GrandTotal>
        </Fees>
        <button type="submit" form="my-form">
          CONTINUE TO PAY
        </button>
      </Summary>
      {showThanks ? <ThankYou total={total}></ThankYou> : <></>}
    </div>
  );
}
