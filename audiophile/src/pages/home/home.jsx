import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Button from "../../components/button";
import ProductLine from "../../components/productLine";
import ClosingRemarks from "../../components/closignRemarks";

import Image from "/assets/home/desktop/image-herooo.jpg";
import MobileHero from "/assets/home/mobile/image-header.jpg";
import zx9Speaker from "/assets/home/desktop/image-speaker-zx9.png";
import patterCircles from "/assets/home/desktop/pattern-circles.svg";
import zx7SpeakerMobile from "/assets/home/mobile/image-speaker-zx7.jpg";
import zx7SpeakerDesktop from "/assets/home/desktop/image-speaker-zx7.jpg";
import yx1EarphonesImage from "/assets/home/desktop/image-earphones-yx1.jpg";
import {
  Hero,
  HomeContainer,
  HeroContent,
  HeroImage,
  BlackBackground,
  ZX9Speaker,
  ZX9SpeakerImages,
  ZX9SpeakerDescription,
  SampleProducts,
  ZX7Speaker,
  ZX7SpeakerImage,
  ZX7SpeakerDescription,
  YX1Earphones,
  YX1EarphonesDescription,
  YX1EarphonesImage,
} from "./homeStyled";

export default function Home() {
  return (
    <>
      <Navbar />{" "}
      <HomeContainer>
        <Hero>
          <BlackBackground></BlackBackground>
          <HeroContent>
            <h3>NEW PRODUCT</h3>
            <h1>
              XX99 Mark II <br />
              Headphones
            </h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button id={4} />
          </HeroContent>
          <HeroImage>
            <source srcSet={Image} media="(min-width: 1250px)" />
            <source srcSet={MobileHero} media="(max-width: 760px)" />

            <img src={Image} alt="Description" />
          </HeroImage>
        </Hero>
        <ProductLine />
        <SampleProducts>
          <ZX9Speaker>
            <ZX9SpeakerImages>
              <img src={zx9Speaker} alt="" />
              <img src={patterCircles} alt="" />
            </ZX9SpeakerImages>

            <ZX9SpeakerDescription>
              <h2>
                ZX9 <br />
                SPEAKER
              </h2>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Button id={6} />
            </ZX9SpeakerDescription>
          </ZX9Speaker>
          <ZX7Speaker>
            <ZX7SpeakerImage>
              <source srcSet={zx7SpeakerMobile} media="(max-width: 768px)" />
              <source srcSet={zx7SpeakerDesktop} media="(min-width: 768px)" />
              <img src={zx7SpeakerMobile} alt="Description" />
            </ZX7SpeakerImage>
            <ZX7SpeakerDescription>
              <h2>ZX7 SPEAKER</h2> <Button id={5} />
            </ZX7SpeakerDescription>
          </ZX7Speaker>
          <YX1Earphones>
            <YX1EarphonesImage src={yx1EarphonesImage}></YX1EarphonesImage>
            <YX1EarphonesDescription>
              <h2>YX1 EARPHONES</h2> <Button id={1} />
            </YX1EarphonesDescription>
          </YX1Earphones>
          <ClosingRemarks />
        </SampleProducts>
      </HomeContainer>
      <Footer />
    </>
  );
}
