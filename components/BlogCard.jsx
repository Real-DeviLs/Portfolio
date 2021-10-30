import React from "react";
import styled from "styled-components";
import Link from 'next/link'
import { GrFormNextLink } from 'react-icons/gr'
import { IconContext } from "react-icons/"
import imageUrlBuilder from '@sanity/image-url'
import client from "../client";
import BlockContent from '@sanity/block-content-to-react'

const Wrapper = styled.div`

    justify-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 40px 80px;
    background-color: #efe6e8;
    @media(max-width: 700px)
    {
      grid-template-columns: 1fr;
    }

`

const TextWrapper = styled.div`

    text-align: left;
    background-color: #efe6e8;
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

const ImageWrapper = styled.div`



`

const StyledImage = styled.img`


    height: 300px;
    width: 400px;
    @media(max-width: 768px)
    {
    max-width: 300px;
    }
`



function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

function toPlainText(blocks = []) {
  return blocks
    // loop through each block
    .map(block => {
      // if it's not a text block with children,
      // return nothing
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      // loop through the children spans, and join the
      // text strings
      return block.children.map(child => child.text).join('')
    })
    // join the paragraphs leaving split by two linebreaks
    .join('\n\n')
}

export const BlogCard = (props) => {
  let previewText = toPlainText(props.body);
  previewText = previewText.substring(0, 120);
  return (
    <>
      <Wrapper>
        {props.mainImage && (
          <StyledImage src={urlFor(props.mainImage).url()} />
        )}
        <TextWrapper>
          <Title>
            <Link href="/post/[slug]" as={`/post/${props.slug.current}`}><a>{props.title}</a></Link>
          </Title>
          <Data>{previewText}</Data>
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
