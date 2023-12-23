// Import necessary components and data
import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ProductLine from "../../components/productLine";
import ClosingRemarks from "../../components/closignRemarks";
import Button from "../../components/button";
import productData from "../../data.json"; // import product data from a JSON file
import { HeadphonesDisplay, Description } from "./earphonesStyled"; // import styled components

// Filter earphone products from the list of products
const EarphonesAvailable = productData.filter(
  (product) => product.category == "earphones" // filter out earphones from product data
);

// Map through the earphones available and return JSX for each earphone product
const EarphonesArray = EarphonesAvailable.map((product) => {
  // split the product name into an array of words
  const productName = product.name.split(" ");
  // omit last word from product name
  productName.pop();
  // rejoin the product name into a string
  const productsActualName = productName.join(" ");

  // Return JSX for each earphone product
  return (
    <React.Fragment key={product.id}>
      {/* Responsive image display using picture and source elements */}
      <picture>
        <source srcSet={product.image.desktop} media="(min-width: 1240px)" />
        <source srcSet={product.image.tablet} media="(min-width: 768px)" />
        <img src={product.image.mobile} alt="Description" />
      </picture>
      <Description>
        {product.new && <h3>NEW PRODUCT</h3>}
        <h2>
          {productsActualName}
          <br />
          EARPHONES
        </h2>
        <p>{product.description}</p>
        <Button id={product.id} />
      </Description>
    </React.Fragment>
  );
});

// Default function to return JSX for the Speakers page
export default function Speakers() {
  return (
    // JSX for Speakers page
    <>
      <Navbar />
      <HeadphonesDisplay>{EarphonesArray}</HeadphonesDisplay>
      <ProductLine />
      <ClosingRemarks />
      <Footer />
    </>
  );
}
