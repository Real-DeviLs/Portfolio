import React from "react";
import styled from "styled-components";
import { faqs } from "../utils/data";
import { AccordianItem } from "./AccordianItem";
import {Heading} from "./generic";


const AccordianWrapper = styled.div`

    display:flex;
    flex-direction:column;
    padding: 40px;
    align-items:center;
    margin:auto
`

const StyledHeading = styled(Heading)`

    ${'' /* align-self:baseline; */}
    ${'' /* margin-left:200px; */}
`

export const Accordian = (props)=>{

    return(
        <>
        <AccordianWrapper>
            <StyledHeading>Education</StyledHeading>
            {faqs.map((faq,index)=>(
                <AccordianItem key={index} faq={faq}></AccordianItem>
            ))}
        </AccordianWrapper>
        </>
    )
}