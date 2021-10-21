import React,{useState} from "react";
import styled from "styled-components";




const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    padding: 25px 25px 5px 25px;
    border-bottom: 1px solid #e8eeeb;

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
    align-items: space-between;
    gap:350px;
    @media(max-width:945px)
    {
       gap: 150px;
    }
    @media(max-width:780px)
    {
       gap: 50px;
    }
    @media(max-width:680px)
    {
       flex-direction: column;
       gap: 5px;
    }
`
const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    ${'' /* margin-left:300px; */}
`
const RightText = styled.div`
   font-size: 13px;
    font-style: italic;
    font-weight: 500;
    color: #a28eb2;

`


const AnswerWrapper = styled.div`

    display: ${props=>props.active?"block":"none"};
    user-select: none;

`


const Answer  = styled.div`


`
const Date = styled.div`

    font-size: 13px;
    font-weight: 400;
    color: #595959;

`




export const AccordianItem = (props) => {
    const [setActive,setAciveState] = useState("")

  

    const {question,answer} = props.faq;
    return(

       <Wrapper>
            <StyledButton onClick={()=>{ console.log("Ethe"); setAciveState(!setActive)}} active = {setActive}>
            <Date>Jan 2003 May 2007</Date>
            <TextWrapper> 
            <Title>    {question}</Title>
            <RightWrapper>
                <RightText>
                    George Mason University, Fairfax
                </RightText>
            </RightWrapper>
            </TextWrapper>
           
        
            {/* <StyledSpan>-</StyledSpan> */}
            </StyledButton>
            <AnswerWrapper active={setActive}>

                <Answer>{answer}</Answer>
            </AnswerWrapper>
       </Wrapper>
    )
}



