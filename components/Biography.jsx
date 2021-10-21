import React from "react";
import styled from "styled-components";
import { Heading } from "./generic"

const Wrapper = styled.div`

  padding: 30px;
  margin:35px 120px;
  @media(max-width:780px)
    {
       margin: 0px;
    }
`
const Text = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
    text-align: left;
    font-size: 17px;
    line-height: 1.765em;
    color: #6b6768;
    @media(max-width:780px)
    {
        grid-template-columns: 1fr;
    }


`

const Styledparagraph = styled.p`

  ${'' /* padding:10px; */}

`

export const Biography = (props)=>{

  return(
    <Wrapper>

    <Heading>Biography</Heading>
    <Text>
      <Styledparagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestiae inventore explicabo magni aut vero nobis iusto obcaecati exercitationem consequatur saepe, sapiente nisi nemo assumenda possimus eos omnis deserunt enim.
      </Styledparagraph>
      <Styledparagraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nisi eius obcaecati iste iure perferendis omnis est cumque vel sed, non similique eligendi numquam inventore ullam error, sint nulla veritatis.
      </Styledparagraph>
      <Styledparagraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nisi eius obcaecati iste iure perferendis omnis est cumque vel sed, non similique eligendi numquam inventore ullam error, sint nulla veritatis.
      </Styledparagraph>
      <Styledparagraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nisi eius obcaecati iste iure perferendis omnis est cumque vel sed, non similique eligendi numquam inventore ullam error, sint nulla veritatis.
      </Styledparagraph>
      
    </Text>

    </Wrapper>
  )

}




