// Importing required libraries and components
import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ProductLine from "../../components/productLine";
import ClosingRemarks from "../../components/closignRemarks";
import Button from "../../components/button";

// Importing the speakers data and styles
import productData from "../../data.json";
import { HeadphonesDisplay, Description } from "./speakersStyled";

// Filtering the speakers
const speakersAvailable = productData.filter(
  // Filtering based on the 'speakers' category
  (product) => product.category == "speakers"
);

// Mapping the filtered speakers array into the required structure
const speakersArray = speakersAvailable.map((product) => {
  // Splitting the name based on space character
  const productName = product.name.split(" ");

  // Removing the last word from the name
  productName.pop();

  // Converting the name array back into string
  const productsActualName = productName.join(" ");

  // Returning the product component based on the product data
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
          SPEAKER
        </h2>
        <p>{product.description}</p>
        <Button id={product.id} />
      </Description>
    </React.Fragment>
  );
});

// Exporting the Speakers component
export default function Speakers() {
  return (
    // Rendering the required components and passing the speakers data
    <>
      <Navbar />
      <HeadphonesDisplay>{speakersArray}</HeadphonesDisplay>
      <ProductLine />
      <ClosingRemarks />
      <Footer />
    </>
  );
}
