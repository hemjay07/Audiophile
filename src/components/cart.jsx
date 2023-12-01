import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { cartContext } from "../App";
import styled from "styled-components";
import SampleImage from "/assets/cart/image-xx59-headphones.jpg";
import productData from "../data.json";
import Counter from "./counter";
import { figureOutProductsActualName } from "../pages/productDetail/productDetail";
const Cart = styled.div`
  z-index: 2;
  width: 20rem;

  background-color: #fff;
  color: #000;
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translateX(-50%);
  padding: 1.5rem;
  border-radius: 0.5rem;

  @media (min-width: 768px) {
    transform: revert;
    left: revert;
    right: 10%;
    width: 23rem;
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.4rem;
  p:first-of-type {
    font-size: 1.125rem;
    letter-spacing: 0.08038rem;
  }
  p:last-of-type {
    font-size: 0.9375rem;
    font-weight: 500;
    line-height: 1.5625rem; /* 166.667% */
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      color: #d87d4a;
      opacity: 1;
    }
  }
`;
const Items = styled.div`
  padding: 0 0.5rem;
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #ccc; /* Optional: Add a border for visibility */
  border-radius: 0.5rem;
`;
const Item = styled.div`
  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
  }
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  // gap: 0.5rem;
  button {
    // margin-left: auto;
  }
`;
const ItemPrice = styled.div`
  // border: solid 2px red;
  display: flex;
`;
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;
const Checkout = styled.button`
  width: 100%;
  margin-top: 0.5rem;
  background-color: #d87d4a;
  cursor: pointer;
`;
export default function () {
  const { cart, setCart } = useContext(cartContext);
  // const [totalCart, setTotalCart] = useState(0);
  console.log(cart, "alongwongwongwong");
  // set the total cart
  // setTotalCart(Object.keys(cart).length);\
  const totalCart = Object.keys(cart).length;
  let total = 0;
  const navigate = useNavigate();
  return (
    <Cart>
      <Top>
        <p>CART({totalCart})</p>
        <p onClick={() => setCart({})}>Remove All</p>
      </Top>
      <Items>
        {
          // this returns an array containing the key at the first index(the Id) and the value at the second index (the quantity)
          Object.entries(cart).map((item) => {
            const thisProduct = productData.filter(
              (product) => product.id == item[0]
            )[0];

            // add this product to the total after multipling its quantity by its price
            total = total + thisProduct.price * item[1];

            const key = nanoid();
            // console.log(thisProduct, "owbgowbgwobg");
            return (
              <Item key={key}>
                <ItemPrice>
                  <img src={thisProduct.image.cartImage} alt="" />
                  <div>
                    <p>{figureOutProductsActualName(thisProduct.name)}</p>
                    <p>${thisProduct.price.toLocaleString("en-US")}</p>
                  </div>
                </ItemPrice>{" "}
                <Counter productId={item[0]} productQuantity={item[1]} />
              </Item>
            );
          })
        }
      </Items>
      <Total>
        <p>TOTAL</p>
        <p>${total.toLocaleString("en-US")}</p>
      </Total>
      <Checkout onClick={() => navigate("/checkout")}>CHECKOUT</Checkout>
    </Cart>
  );
}
