import React from "react";
import styled from "styled-components";

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
    max-width: 100%;
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

export const Blog = () => {
    return (
        <Box>
            <Date>January 14, 2020</Date>
            <Heading>The ultimate guide to product marketing 2019</Heading>
            <Image src="/images/blog.jpg" alt="blog"></Image>
            <Text> Lorem ipsum dolor sit amnsectetur adpisici do eiusmod tempor incidt ut labore et dolore gna aliquat enim ad minim veniam quis nosexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit,o eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ul ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Seperspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquedantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</Text>
        </Box>
    )
}
