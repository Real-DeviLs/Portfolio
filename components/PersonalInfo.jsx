import React from "react";
import styled from "styled-components";
import Image from "next/image"
import { Heading, Curved } from "./generic";
import { BsPerson, BsTelephone, BsCalendarWeek, BsGlobe } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FaRegAddressBook } from 'react-icons/fa'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from "../client";

const StyledCircle = styled.div`

    color: #A28EB2;
    position: absolute;
    top: -15px;
    left: -50px;
    transform: rotate(-40deg);
`

const StyledSpan = styled.span`

    padding-left:18px;
    @media(max-width:${props => props.theme.breakpoint.tablet})
    {
        padding-left:5px
    }

`


const LeftWrapper = styled.div`
    @media(max-width:${props => props.theme.breakpoint.tablet})
    {
        text-align:center;
    }
`

const TagWrapper = styled.div`

    display: flex;
    color: #595959;
    line-height: 1;
    padding-top:15px;
`

const LeftText = styled.div`
     padding: 5px 50px 5px 0px;
     @media(max-width:${props => props.theme.breakpoint.tablet})
    {
        padding: 5px 5px 5px 20px;
    }

`

const RightText = styled.div`
    padding: 5px 5px 5px 50px;
    @media(max-width:${props => props.theme.breakpoint.tablet})
    {
       margin:auto;
       padding: 5px 5px 5px 20px;
    }

`

const TextWrapper = styled.div`
        display: flex;

`

const RightWrapper = styled.div`

    position: relative;
    padding-left:50px;
    padding-top:50px;
    margin-top:85px;
    @media(max-width:${props => props.theme.breakpoint.tablet})
    {
        margin:auto;
        padding: 0px;
    }


`

const Wrapper = styled.div`

    display: flex;
    justify-content:center;
    padding-top:100px;
    @media(max-width:${props => props.theme.breakpoint.tablet})
    {
        flex-direction: column-reverse;
        align-items: center;
    }
`

const Description = styled.p`

    max-width: 550px;
    line-height: 30px;
    padding: 50px 25px 25px 5px;
    @media(max-width:${props => props.theme.breakpoint.tablet})
    {
        padding: 30px 25px 20px 45px;
    }

`
function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export const PersonalInfo = (props) => {
  return (
    <Wrapper>

      <LeftWrapper>
        <Heading>
          Personal Info
        </Heading>
        <TextWrapper>
          <LeftText>
            <TagWrapper>
              <BsPerson /> <StyledSpan>{props.personalDetails.name}</StyledSpan>

            </TagWrapper>
            <TagWrapper>
              <BsCalendarWeek /> <StyledSpan>{props.personalDetails.birthDay}</StyledSpan>

            </TagWrapper>
            <TagWrapper>
              <AiOutlineMail /> <StyledSpan>{props.personalDetails.email}</StyledSpan>

            </TagWrapper>
          </LeftText>
          <RightText>
            <TagWrapper>
              <BsTelephone /> <StyledSpan>{props.personalDetails.phone}</StyledSpan>
            </TagWrapper>
            <TagWrapper>
              <FaRegAddressBook /> <StyledSpan>{props.personalDetails.location}</StyledSpan>
            </TagWrapper>
            <TagWrapper>
              <BsGlobe /> <StyledSpan>{props.personalDetails.website}</StyledSpan>
            </TagWrapper>
          </RightText>
        </TextWrapper>

        <Description>
          <BlockContent
            blocks={props.personalDetails.bio}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            {...client.config()}
          />
        </Description>
        <img src={urlFor(props.personalDetails.signature).url()} width="300px" height="50px" />
      </LeftWrapper>
      <RightWrapper>
        <StyledCircle >
          <Curved text="Hello World Hey I AM MK " ></Curved>
        </StyledCircle>
        <img src={urlFor(props.personalDetails.image).url()} width="350px" height="600px" />
      </RightWrapper>
    </Wrapper>
  )
}
