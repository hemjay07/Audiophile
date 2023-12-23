import React from "react";
import styled from "styled-components";
import RemarksMobileImage from "/assets/shared/mobile/image-best-gear.jpg";
import RemarksTabletImage from "/assets/shared/tablet/image-best-gear.jpg";
import RemarksDesktopImage from "/assets/shared/desktop/image-best-gear.jpg";

const Remarks = styled.div`
  max-width: 2100px;
  display: grid;
  text-align: center;
  width: 80%;
  margin: 8rem auto;

  grid-template-areas:
    "one two"
    "three four";

  :nth-child(1) {
    grid-area: one;

    img {
      width: 100%;
      border-radius: 0.5rem;
    }
  }

  :nth-child(2) {
    grid-area: three;
  }

  h2 {
    text-align: center;
    font-family: Manrope;
    font-size: 1.75rem;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.0625rem;
    margin: 2rem 0;
  }

  span {
    color: #d87d4a;
    border: none;
  }

  p {
    color: #000;
    text-align: center;
    font-family: Manrope;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5625rem;
    opacity: 0.5;
  }

  @media (min-width: 1250px) {
    grid-auto-columns: 1fr;

    :nth-child(1) {
      grid-area: two;
    }

    :nth-child(2) {
      grid-area: one;
      margin: auto;
    }

    p {
      text-align: left;
      padding-right: 3rem;
    }

    h2 {
      text-align: left;
      font-size: 2.5rem;
      line-height: 2.75rem;
      letter-spacing: 0.08931rem;
      padding-right: 3rem;
    }
  }
`;
const RemarksImage = styled.picture``;

export default function ClosingRemarks() {
  return (
    <>
      <Remarks>
        <RemarksImage>
          <source srcSet={RemarksDesktopImage} media="(min-width: 1250px)" />{" "}
          <source srcSet={RemarksTabletImage} media="(min-width: 450px)" />
          <img src={RemarksMobileImage} alt="Description" />
        </RemarksImage>
        <div>
          <h2>
            BRINGING YOU THE
            <span> BEST</span>
            <br /> AUDIO GEAR
          </h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </Remarks>
    </>
  );
}
