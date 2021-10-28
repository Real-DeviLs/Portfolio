import React from "react";
import styled from "styled-components";
import { faqs } from "../utils/data";
import { AccordianItem } from "./AccordianItem";
import { Heading } from "./generic";


const AccordianWrapper = styled.div`

    display:flex;
    flex-direction:column;
    padding: 40px;  
    @media(max-width: 750px)
    {
     
      padding:0px;
    }
`

const HeadingWrapper = styled.div`

    width:80%;
    margin:auto;
    padding-left:20px;
    @media(max-width:1100px)
    {
        width:95%;
    }
`


export const Accordian = (props) => {

  return (
    <>
      <AccordianWrapper>
      <HeadingWrapper>
        <Heading>{ props.heading }</Heading>
        </HeadingWrapper>
        {props.items.map((item, index) => { 
          return(
          
            <AccordianItem key={index} data={item}></AccordianItem>
            
          )
        })}
      </AccordianWrapper>
    </>
  )
}

