import React from "react";
import styled from "styled-components";
import Image from "next/image"


const LeftWrapper =  styled.div`


`

const Heading = styled.h2`
        color: #3B354A;
        font-size: 40px;
        font-family: Playfair Display,serif;
        font-weight:400;
`
const LeftText =  styled.div``

const RightText = styled.div`

    padding-left:50px;
`

const TextWrapper = styled.div`

        display: flex;
`



const RightWrapper = styled.div`

    background : url('/')

`

const Wrapper = styled.div`

    display: flex;
    justify-content:center;

`



export const  PersonalInfo = (props)=>{
    return(
       <Wrapper>

        <LeftWrapper>
            <Heading>
                Personal Info
            </Heading>
        </LeftWrapper>
        <RightWrapper>
            <Image src="/images/photo.jpg"  width="407px" height="547px" ></Image>
        </RightWrapper>
       </Wrapper>
    )
}
