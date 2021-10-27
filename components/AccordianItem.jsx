import React, { useState, useRef } from "react";
import styled from "styled-components";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import BlockContent from '@sanity/block-content-to-react'
import client from "../client";


const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    padding: 10px 30px 5px 30px;
    border-bottom: 4px solid #e8eeeb;
    width: 80%;
    margin:auto;
    @media(max-width:1100px)
    {
        width:95%;
    }

`
const StyledButton = styled.div`

    cursor: pointer;
    user-select: none;
`


const Title = styled.span`

    font-weight: 600;
    letter-spacing: .1em;
    word-wrap: break-word;
    line-height: 21px;
    font-size:17px;
    text-transform: uppercase;
    color: black;
`

const TextWrapper = styled.div`

    display: flex;
    padding-top:20px;
    justify-content: space-between;
    width:100%;

    @media(max-width:690px)
    {
       flex-direction: column;
    }
`


const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const RightText = styled.div`
   font-size: 13px;
    font-style: italic;
    font-weight: 500;
    color: #a28eb2;
`


const AnswerWrapper = styled.div`


    display: ${props => props.active ? "block" : "none"};

    user-select: none;
    background: rgb(239, 230, 232);

`



const Answer = styled.li`
    padding:25px;

`
const Date = styled.div`

    font-size: 13px;
    font-weight: 400;
    color: #595959;
`

const StyledEye = styled(BsEye)`

    align-self: flex-end;
    margin-top:-8px;
    display: ${props => props.active ? "block" : "none"};
    opacity:${props => props.active ? 1 : 0};
    transition: opacity 1s;
`

const StyledBsEyeSlash = styled(BsEyeSlash)`
    align-self: flex-end;
    margin-top:-8px;
    display: ${props => props.active ? "none" : "block"};
    opacity:${props => props.active ? 0 : 1};
    transition: opacity 1s;
`


export const AccordianItem = (props) => {

  const [setActive, setAciveState] = useState("")
  const content = useRef(null);
  const [setHeight, setHeightState] = useState("0px");

  console.log(props.item);

  function toggleAccordion() {
    setAciveState(!setActive);
    setHeightState(
      setActive == false ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  return (

    <Wrapper>
      <StyledButton onClick={toggleAccordion} active={setActive}>
        <Date>{props.date1} {props.date2}</Date>
        <TextWrapper>
          <Title>    {props.title}</Title>
          <RightWrapper>
            <StyledBsEyeSlash active={setActive} />
            <StyledEye active={setActive} />
            <RightText>
              {props.subTitle}
            </RightText>
          </RightWrapper>
        </TextWrapper>


        {/* <StyledSpan>-</StyledSpan> */}
      </StyledButton>
      <AnswerWrapper ref={content} className={setActive ? 'active' : "closed"} height={setHeight} active={setActive}>

        <Answer><BlockContent
          blocks={props.details}
          imageOptions={{ w: 320, h: 240, fit: 'max' }}
          {...client.config()}
        /></Answer>
      </AnswerWrapper>
    </Wrapper>
  )

}



