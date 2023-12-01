import React, { useState, useContext } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Button from "../../components/button";
import GoBackButton from "../../components/goBackButton";
import productData from "../../data.json";
import { useParams } from "react-router-dom";
import { cartContext } from "../../App";
import {
  Description,
  ProductDisplay,
  MainProduct,
  AddToCartAndCounterControler,
  AddToCart,
  Features,
  FeaturesAndInTheBox,
  InTheBox,
  Include,
  Gallery,
  AlsoLike,
  Others,
  CounterControler,
} from "./productDetailStyled";
export function figureOutProductsActualName(name) {
  const productName = name.split(" ");
  productName.pop();
  const productsActualName = productName.join(" ");
  return productsActualName;
}
export default function () {
  let params = useParams();
  const productId = params.productId;
  const product = productData.find((product) => product.id == productId);
  const [count, setCount] = useState(1);
  const include = product.includes.map((item, index) => {
    return (
      <div key={index}>
        <span>{`${item.quantity}x`}</span>
        <span>{item.item}</span>
      </div>
    );
  });
  const gallery = Object.values(product.gallery).map((item, index) => {
    return (
      <picture key={index}>
        <source srcSet={item.desktop} media="(min-width: 1240px)" />
        <source srcSet={item.tablet} media="(min-width: 768px)" />
        <img src={item.mobile} alt="Description" />
      </picture>
    );
  });
  const others = product.others.map((item, index) => {
    const clickedProduct = productData.find((x) => item.slug == x.slug);
    return (
      <div key={index}>
        <picture>
          <source srcSet={item.image.desktop} media="(min-width: 1240px)" />
          <source srcSet={item.image.tablet} media="(min-width: 768px)" />
          <img src={item.image.mobile} alt="Description" />
        </picture>
        <h2>{item.name}</h2>
        <Button id={clickedProduct.id} />
      </div>
    );
  });

  const featuresDescription = product.features
    .split("\n\n")
    .map((description, index) => <p key={index}>{description}</p>);

  console.log("reloaded");
  const { cart, setCart } = useContext(cartContext);
  function handleCartUpdate() {
    setCart((prev) => {
      // if the product exist in the cart already, add the previous quantity to the count else create the product in the cart
      const newQuantity = prev[productId] ? prev[productId] + count : count;
      return {
        ...prev,
        [productId]: newQuantity,
      };
    });
    console.log(cart);
  }
  return (
    <>
      <Navbar />
      <GoBackButton />
      <ProductDisplay>
        <MainProduct>
          <picture>
            <source
              srcSet={product.image.desktop}
              media="(min-width: 1240px)"
            />
            <source srcSet={product.image.tablet} media="(min-width: 768px)" />
            <img src={product.image.mobile} alt="Description" />
          </picture>
          <Description>
            {product.new && <h3>NEW PRODUCT</h3>}
            <h2>
              {figureOutProductsActualName(product.name)}
              <br />
              EARPHONES
            </h2>
            <p>{product.description}</p>
            <h4>$ {product.price.toLocaleString("en-US")}</h4>
            <AddToCartAndCounterControler>
              {/* I added the key after I realize that the counter continues and
              doesnt reset to 1 when I change products. The key basically tells
              react to create the component from the scratch */}
              {/* <Counter key={product.name} /> */}
              <CounterControler>
                <button
                  onClick={() => {
                    if (count != 1) {
                      setCount(count - 1);
                    }
                  }}
                >
                  -
                </button>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>+</button>
              </CounterControler>
              <AddToCart onClick={handleCartUpdate}>ADD TO CART</AddToCart>
            </AddToCartAndCounterControler>
          </Description>
        </MainProduct>
        <FeaturesAndInTheBox>
          <Features>
            <h2>FEATURES</h2>
            {featuresDescription}
          </Features>

          <InTheBox>IN THE BOX</InTheBox>
          <Include> {include}</Include>
        </FeaturesAndInTheBox>
        <Gallery> {gallery}</Gallery>

        <AlsoLike>YOU MAY ALSO LIKE</AlsoLike>
        <Others> {others}</Others>
      </ProductDisplay>

      <Footer />
    </>
  );
}
