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
`

const TextArea = styled.div`
    max-width: 1100px;
    padding: 40px;
    padding-bottom: 90px;
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
        line-height: 57px;
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
const BottomBox = styled.div`
    max-width: 1400px;
    height: 110px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 1100px) {
      grid-template-columns: 1fr;
    }
`

const SocialSection = styled.div`
    background-color: rgb(59, 53, 74);
    font-family: Roboto;
    overflow: hidden;
    color: rgb(255, 255, 255);
    display: flex;
    gap: 80px;
    justify-content: center;
    align-items:center;
    @media (max-width: 768px) {
        gap: 60px;
    }
`

const SocialLink = styled.a`
    padding: 10px;
    font-size: 35px;
    font-weight: 500;
    letter-spacing: .1em;
    line-height: 22px;
    color: rgba(255, 255, 255, .5);
    @media (max-width: 768px) {
        font-size: 18px;
        font-weight: 200;
      }
`

export const Hero = (props) => {
  return (
    <Box>
      <TextArea>
        <Heading>{props.heading}</Heading>
        <ParaText>
          <Para>I am a self-driven, highly motivated professional, passionate about acquiring new skills. My flexibility and open-mindedness are reflected by my ease of assimilating to new work environments.</Para>
        </ParaText>
      </TextArea>
      <BottomBox>
        <SocialSection>
          <SocialLink href="publications">Publications</SocialLink>
          <SocialLink href="events">Events</SocialLink>
        </SocialSection>
      </BottomBox>
    </Box >
  )
}

