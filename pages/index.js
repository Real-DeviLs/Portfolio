import { PersonalInfo } from '../components'
import { Hero } from '../components'
import { Accordian } from '../components'
import { Biography } from '../components'
import { ContactUs } from '../components'
import { BlogCard } from '../components'
import { Heading } from '../components/generic'
import styled from "styled-components";
import client from "../client";
import groq from 'groq'


const BlogCardWrapper = styled.div`

  margin-top:-100px;
  padding: 100px; 
  @media(max-width: 1000px)
    {
       padding: 50px; 
     
 
    }
    @media(max-width: 750px)
    {
       padding: 0px; 
    }
`
const HeadingWrapper = styled.div`

    width:80%;
    margin:auto;
    padding-left:20px;
    @media(max-width:1100px)
    {
        width:95%;
    }
`

const personalDetailsQuery = groq`*\[_type == "personalDetails"\][0] {
  name,
  phone,
  birthDay,
  location,
  email,
  website,
  bio,
  image,
  signature,
}`;

const educationDetailsQuery = groq`*\[_type == "education"\]`;

export async function getStaticProps() {
  const personalDetails = await client.fetch(personalDetailsQuery);
  const educationDetails = await client.fetch(educationDetailsQuery);
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
    `);
  const data = { personalDetails, educationDetails, posts };

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

export default function Home({ data }) {
  return (
    <>
      <Hero></Hero>
      <PersonalInfo personalDetails={data.personalDetails}></PersonalInfo>
      <Biography></Biography>
      <Accordian educationDetails={data.educationDetails}></Accordian>
      <div>


        <HeadingWrapper>
        <Heading>Blogs</Heading>
        </HeadingWrapper>

        <BlogCardWrapper>
        {data.posts.map(
          ({ _id, title, mainImage, slug }) =>
            slug && (
              <BlogCard key={_id} title={title} mainImage={mainImage} slug={slug} ></BlogCard>
            )
        )}
        </BlogCardWrapper>
      </div>
      
      <ContactUs></ContactUs>
    </>
  )
}
