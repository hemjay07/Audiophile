// Importing necessary libraries and components
import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ProductLine from "../../components/productLine";
import ClosingRemarks from "../../components/closignRemarks";
import Button from "../../components/button";
// Importing product data
import productData from "../../data.json";
// Importing styled components
import { Description, HeadphonesDisplay } from "./headphonesStyled";

// Filtering out headphone products from the entire product data
const headphonesAvailable = productData.filter(
  (product) => product.category == "headphones" // checking if product is a headphone
);

// Mapping over the available headphone products to create JSX
const headphonesArray = headphonesAvailable.map((product) => {
  // The last word is the product type and shoudl therefore be excluded in the
  // product name
  const productName = product.name.split(" ");
  productName.pop();
  // Rejoining the product name (excluding last word)
  const productsActualName = productName.join(" ");
  // Returning JSX for each headphone product
  return (
    <React.Fragment key={product.id}>
      <picture>
        <source srcSet={product.image.desktop} media="(min-width: 1240px)" />
        <source srcSet={product.image.tablet} media="(min-width: 768px)" />
        <img src={product.image.mobile} alt="Description" />
      </picture>
      <Description>
        {product.new && <h3>NEW PRODUCT</h3>}
        <h2>
          {productsActualName} <br />
        </h2>
        <p>{product.description}</p>
        <Button id={product.id} />
      </Description>
    </React.Fragment>
  );
});

// Main headphones component
export default function Headphones() {
  // JSX for the headphones page
  return (
    <>
      <Navbar />
      <HeadphonesDisplay>{headphonesArray} </HeadphonesDisplay>
      <ProductLine />
      <ClosingRemarks />
      <Footer />
    </>
  );
}
