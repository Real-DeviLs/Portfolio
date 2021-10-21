import React from "react";
import styled from "styled-components";

const Box = styled.div`
    background-color: transparent;
    background-repeat: no-repeat;
    background-image: url('/images/hero.jpg');
    background-size: cover;
    background-position: 50% 50%;
    width: 100%;
    height: 100%;
    opacity: 1;
    z-index: 20;
    padding-bottom: 70px;
`

const TextArea = styled.div`
    max-width: 1100px;
    padding: 55px;
    padding-bottom: 105px;
`

const Heading = styled.h1`
    font-family: "Playfair Display";
    text-align: left;
    line-height: 107px;
    letter-spacing: 0px;
    font-weight: 400;
    font-size: 85px;
    color: rgb(255, 255, 255);
    @media (max-width: 768px) {
        font-size: 40px;
    }
`

const ParaText = styled.div`
    margin-top: 20px;
    max-width: 800px;
`
const Para = styled.p`
    font-family: "IBM Plex Mono";
    visibility: visible;
    text-align: left;
    line-height: 33px;
    letter-spacing: 0px;
    font-weight: 400;
    word-spacing: 15px;
    font-size: 17px;
    color: rgb(255, 255, 255);
`

export const Hero = () => {
  return (
    <Box>
      <TextArea>
        <Heading>A motivational speaker with over 10 years of experience in life coaching talks.</Heading>
        <ParaText>
          <Para>I am a self-driven, highly motivated professional, passionate about acquiring new skills. My flexibility and open-mindedness are reflected by my ease of assimilating to new work environments.</Para>
        </ParaText>
      </TextArea>
    </Box >
  )
}

