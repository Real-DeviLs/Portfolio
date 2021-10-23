import React from "react";
import styled from "styled-components";
import Image from "next/image"
import { Heading, Curved } from "./generic";
import { BsPerson, BsTelephone, BsCalendarWeek, BsGlobe } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FaRegAddressBook } from 'react-icons/fa'


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
              <BsPerson /> <StyledSpan>Mohit Kumar</StyledSpan>

            </TagWrapper>
            <TagWrapper>
              <BsCalendarWeek /> <StyledSpan>04.09.1980</StyledSpan>

            </TagWrapper>
            <TagWrapper>
              <AiOutlineMail /> <StyledSpan>kmohit@nitj.ac.in</StyledSpan>

            </TagWrapper>
          </LeftText>
          <RightText>
            <TagWrapper>
              <BsTelephone /> <StyledSpan>Mohit Kumar</StyledSpan>
            </TagWrapper>
            <TagWrapper>
              <FaRegAddressBook /> <StyledSpan>NIT Jalandhar</StyledSpan>
            </TagWrapper>
            <TagWrapper>
              <BsGlobe /> <StyledSpan>MohitKumar.com</StyledSpan>
            </TagWrapper>
          </RightText>
        </TextWrapper>

        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis itaque quidem nobis eaque? Earum culpa ullam dolore cumque sint eum explicabo laborum voluptatem! Repellendus nihil eaque distinctio enim corporis eveniet inventore dignissimos, recusandae quidem cupiditate perferendis culpa nisi fugit ratione tempora, quis ut placeat dolores reprehenderit illum totam aut. Quia quisquam adipisci voluptatum quidem atque? Perspiciatis voluptatum dolorem nihil corrupti magnam deleniti laborum placeat molestiae atque, quibusdam esse vel qui sapiente ex! Corrupti quibusdam aperiam saepe, adipisci distinctio pariatur fugiat exercitationem fugit harum. Repellat reiciendis iste eos voluptate veniam neque assumenda sit quas cupiditate, possimus rem totam. Necessitatibus, aspernatur voluptates.
        </Description>
        <Image src="/images/sign.png" width="300px" height="50px"></Image>
      </LeftWrapper>
      <RightWrapper>
        <StyledCircle >
          <Curved text="Hello World Hey I AM MK " ></Curved>
        </StyledCircle>
        <Image src="/images/photo.jpg" width="350px" height="600px" ></Image>
      </RightWrapper>
    </Wrapper>
  )
}
