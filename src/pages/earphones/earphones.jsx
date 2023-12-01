import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ProductLine from "../../components/productLine";
import ClosingRemarks from "../../components/closignRemarks";
import Button from "../../components/button";
import productData from "../../data.json";
import { HeadphonesDisplay, Description } from "./earphonesStyled";

const EarphonesAvailable = productData.filter(
  (product) => product.category == "earphones"
);
console.log(EarphonesAvailable);
const EarphonesArray = EarphonesAvailable.map((product) => {
  const productName = product.name.split(" ");
  productName.pop();
  const productsActualName = productName.join(" ");
  console.log(productsActualName);

  return (
    <React.Fragment key={product.id}>
      <picture>
        <source srcSet={product.image.desktop} media="(min-width: 1240px)" />
        <source srcSet={product.image.tablet} media="(min-width: 768px)" />
        <img src={product.image.mobile} alt="Description" />
      </picture>{" "}
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

export default function Speakers() {
  return (
    <>
      <Navbar />
      <HeadphonesDisplay>{EarphonesArray}</HeadphonesDisplay>
      <ProductLine />
      <ClosingRemarks />
      <Footer />
    </>
  );
}
