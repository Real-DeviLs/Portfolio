import { PersonalInfo,ContactUs,Hero,Accordian,Biography,BlogCard } from '../components'

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
  
  let educationArray = [];
  educationDetails.map((item)=>{
    
    
    const eduObject = {
      date1 : item.dateStart,
      date2 : item.dateEnd,
      details : item.details,
      title  : item.courseName,
      subTitle : item.institute,
      }

  educationArray.push(eduObject);
  })
  
  const data = { personalDetails, educationArray, posts };

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
      <Hero heading="Lorem ipsum dolle lalo "></Hero>
      <PersonalInfo personalDetails={data.personalDetails}></PersonalInfo>
      <Biography></Biography>
      <Accordian heading="Education" items={data.educationArray}>
      </Accordian>
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
