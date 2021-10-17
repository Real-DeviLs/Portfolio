import React from "react";
import styled from "styled-components";
import { Heading } from "./generic";
import { BsPencilSquare, BsPerson, BsTelephone } from "react-icons/bs"
import { IconContext } from "react-icons/"
import { AiOutlineMail } from 'react-icons/ai'
import {RiLightbulbLine} from 'react-icons/ri'
const Wrapper = styled.div`

    display: flex;
    justify-content: center;

`

const Tag = styled.div`

    display: flex;
`
const TagText = styled.h4`

    margin: -2px 10px;
    color :#242424;

`

const LeftWrapper = styled.div`
   
    padding:25px 70px;

`

const RightWrapper = styled.div`

    padding:25px;
 
    
`


const InputFlex = styled.div`

    display: flex;


`

const InputWrapper = styled.div`

    display: flex;
    position: relative;
    padding: 10px;
`
const StyledInput = styled.input`

    line-height:24px;
    width:400px;
    color: #242424;
    border: 1px solid #000;
    background-color: transparent;
    font-size:17px;
    padding: 17px 27px;
    font-weight: bold;

`
const StyledTextArea = styled.textarea`
    line-height:24px;
    color: #242424;
    border: 1px solid #000;
    background-color: transparent;
    font-size:17px;
    padding: 17px 25px;
    font-weight: bold;
    margin-left:10px;
`
const IconWrapper = styled.span`

    position: absolute;
    right: 25px;
    top: 28px;

`


const Description = styled.div`
    padding-top: 50px;
    max-width:380px;
    font-size: 13px;
    line-height:23px;
    color:#595959;

`

export const ContactUs = (props) => {


    return (
        <>
            <Wrapper>
                <LeftWrapper>
                    <Heading>Get in Touch</Heading>
                    <Tag>
                        <BsPencilSquare />
                        <TagText> Contact US</TagText>
                    </Tag>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus at alias quod maxime culpa incidunt adipisci iusto! In, excepturi! Deleniti commodi assumenda illo repudiandae velit architecto consectetur at, molestias atque! Eos repellat quisquam voluptas, omnis explicabo quasi, magnam laboriosam necessitatibus a maxime ea. Commodi atque dolorem excepturi esse porro! Debitis!
                    </Description>
                </LeftWrapper>
                <RightWrapper>
                    <form>

                        <InputFlex>

                            <InputWrapper>
                                <StyledInput placeholder="Name"></StyledInput>
                                <IconWrapper>
                                    <IconContext.Provider value={{ size: "1.5em" }}>
                                        <BsPerson />
                                    </IconContext.Provider>
                                </IconWrapper>

                            </InputWrapper>
                            <InputWrapper>
                                <StyledInput placeholder="Email"></StyledInput>
                                <IconWrapper>
                                    <IconContext.Provider value={{ size: "1.5em" }}>
                                        <AiOutlineMail />
                                    </IconContext.Provider>
                                </IconWrapper>

                            </InputWrapper>



                        </InputFlex>

                        <InputFlex>

                            <InputWrapper>
                                <StyledInput placeholder="Phone"></StyledInput>
                                <IconWrapper>
                                    <IconContext.Provider value={{ size: "1.5em" }}>
                                        <BsTelephone />
                                    </IconContext.Provider>
                                </IconWrapper>

                            </InputWrapper>
                            <InputWrapper>
                                <StyledInput placeholder="Subject"></StyledInput>
                                <IconWrapper>
                                    <IconContext.Provider value={{ size: "1.5em" }}>
                                        <RiLightbulbLine />
                                    </IconContext.Provider>
                                </IconWrapper>

                            </InputWrapper>
                        </InputFlex>

                        <StyledTextArea placeholder="Your Message ..." type="textbox"  rows="6" cols="70" ></StyledTextArea>
                    </form>
                </RightWrapper>

            </Wrapper>
        </>
    )
}