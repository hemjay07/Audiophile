// Importing required components and values from modules
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import productData from "../../data.json";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Button from "../../components/button";
import GoBackButton from "../../components/goBackButton";

// Importing styled components
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
import { useCartContext } from "../../context/cartContext";

// Function to retrieve name of product
export function figureOutProductsActualName(name) {
  // Splits the name and joins it together to create a new name
  return name.split(" ").slice(0, -1).join(" ");
}

// Main function for the script

export default function () {
  // Retrieve productID from current URL parameters
  let { productId } = useParams();

  // Find matching product data
  const product = productData.find((product) => product.id == productId);

  // Set initial counter state
  const [count, setCount] = useState(1);

  // Generate HTML for 'includes' section of product details
  const includesHtml = product.includes.map((item, index) => (
    <div key={index}>
      <span>{`${item.quantity}x`}</span>
      <span>{item.item}</span>
    </div>
  ));

  // Generate HTML for product gallery
  const galleryHtml = Object.values(product.gallery).map((item, index) => (
    <picture key={index}>
      <source srcSet={item.desktop} media="(min-width: 1240px)" />
      <source srcSet={item.tablet} media="(min-width: 768px)" />
      <img src={item.mobile} alt="Description" />
    </picture>
  ));

  // Generate HTML for 'others' section
  const othersHtml = product.others.map((item, index) => {
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

  // Parsing feature descriptions
  const parsedFeatures = product.features.split("\n\n");

  // Access setCart function from cart context
  const { setCart } = useCartContext();

  // Function to handle updates to cart
  function handleCartUpdate() {
    // Increase quantity of product in cart
    setCart((prev) => {
      const newQuantity = prev[productId] ? prev[productId] + count : count;
      // Return new quantity
      return {
        ...prev,
        [productId]: newQuantity,
      };
    });
    // set the count to 1 so that the user can choose if to add more
    setCount(1);

    // Scroll page to top after update to cart
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  // Return complete component JSX
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
              {/* Counter for selecting product quantity */}
              <CounterControler>
                <button
                  onClick={() => {
                    count > 1 && setCount(count - 1);
                  }}
                >
                  -
                </button>
                <h1 data-testid="count">{count}</h1>
                <button onClick={() => setCount(count + 1)}>+</button>
              </CounterControler>
              {/* Add to Cart button */}
              <AddToCart onClick={handleCartUpdate}>ADD TO CART</AddToCart>
            </AddToCartAndCounterControler>{" "}
          </Description>
        </MainProduct>
        <FeaturesAndInTheBox>
          <Features>
            <h2>FEATURES</h2>
            {parsedFeatures.map((description, index) => (
              <p key={index}> {description} </p>
            ))}
          </Features>

          <InTheBox>IN THE BOX</InTheBox>
          <Include> {includesHtml} </Include>
        </FeaturesAndInTheBox>
        <Gallery> {galleryHtml} </Gallery>
        <AlsoLike>YOU MAY ALSO LIKE</AlsoLike> <Others> {othersHtml}</Others>
      </ProductDisplay>

      <Footer />
    </>
  );
}
