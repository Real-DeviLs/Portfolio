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
          
          let date1 = item.dateStart;
          let date2 = item.dateEnd;
          let details = item.details;
          let title  = item.courseName;
          let subTitle = item.institute;
          return(
          
            <AccordianItem key={index} date1={date1} date2={date2} details={details} title={title} subTitle={subTitle}></AccordianItem>
            
          )
        })}
      </AccordianWrapper>
    </>
  )
}

