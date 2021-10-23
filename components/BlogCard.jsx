import React from "react";
import styled from "styled-components";
import Link from 'next/link'
import { GrFormNextLink } from 'react-icons/gr'
import { IconContext } from "react-icons/"
import imageUrlBuilder from '@sanity/image-url'
import client from "../client";

const Wrapper = styled.div`


    justify-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 40px 80px;
    background-color: #efe6e8;


`

const TextWrapper = styled.div`

    text-align: left;
    line-height: 30px;
    color: #6b6768;
    background-color: backgroundLight;
    padding: 20px 20px 40px 20px;

`
const Title = styled.h2`

    font-size: 25px;
    margin: 25px;
    color: #242424;
    font-weight: 400;

`

const Data = styled.p`

    font-size: 20px;
    font-weight: lightest;
    margin: 25px;
    margin-bottom: 20px;
    color: #6b6768;

`

const StyledSpan = styled.span`

    padding-left:10px ;
    color: #6b6768;



`

const IconWrapper = styled.span`

    padding-left: 30px;

`

const ReadMore = styled.div`

    display: flex;
    flex-direction: row;

`

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export const BlogCard = (props) => {


  return (
    <>
      <Wrapper>
        {props.mainImage && (
          <img src={urlFor(props.mainImage).url()} width="400px" height="300px" />
        )}
        <TextWrapper>
          <Title>
            <Link href="/post/[slug]" as={`/post/${props.slug.current}`}><a>{props.title}</a></Link>
          </Title>
          <Data>
            Lorem ipsum dolor sit amnsectetur adpisici do eiusmod tempor incidt ut labore et dolore gna aliquat enim...
          </Data>
          <ReadMore>
            <IconWrapper>
              <IconContext.Provider value={{ size: "1.3em" }}>
                <GrFormNextLink />
              </IconContext.Provider>
            </IconWrapper>
            <StyledSpan><Link href="/post/[slug]" as={`/post/${props.slug.current}`}><a>READ MORE</a></Link ></StyledSpan>

          </ReadMore>

        </TextWrapper>
      </Wrapper>

    </>

  )

}
