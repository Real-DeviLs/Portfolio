import React from "react";
import styled from "styled-components";
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from "../client";

const Box = styled.div`
    @media only screen and (min-width: 1025px) {
    width: 1000px;
    }
    padding: 30px;
    margin: 0 auto;
`

const Date = styled.p`
    font-size: 13px;
    line-height: 22px;
    font-weight: 400;
    color: #595959;
    text-align: center;
`

const Heading = styled.h1`
    font-family: "Playfair Display",serif;
    color: #0a1a2b;
    font-size: 55px;
    line-height: 1.273em;
    font-weight: 400;
    text-align: center;
`

const Image = styled.img`
    @media only screen and (min-width: 1025px) {
    width: 1000px;
    }
    height: auto;
    vertical-align: middle;
    border-style: none;
`

const Text = styled.p`
    font-family: "IBM Plex Mono",monospace;
    font-size: 17px;
    line-height: 30px;
    font-weight: 400;
    color: #6b6768;
`
function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export const Blog = (props) => {
  return (
    <Box>
      <Date>{props.publishedAt}</Date>
      <Heading>{props.title}</Heading>
      {props.mainImage && (
        <Image src={urlFor(props.mainImage).url()} alt="blog"></Image>
      )}
      <Text> <BlockContent
        blocks={props.body}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      /></Text>
    </Box>
  )
}
