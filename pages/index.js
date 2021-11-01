import { PersonalInfo, ContactUs, Hero, Accordian, Biography, BlogCard } from '../components'

import { Heading } from '../components/generic'
import styled from "styled-components";
import client from "../client";
import groq from 'groq'


const BlogCardWrapper = styled.div`
    width: 85%;
    margin:auto;

`
const HeadingWrapper = styled.div`
    padding-left: 25px;
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
  educationDetails.map((item) => {


    const eduObject = {
      date1: item.dateStart,
      date2: item.dateEnd,
      details: item.details,
      title: item.courseName,
      subTitle: item.institute,
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
    <meta name="google-site-verification" content="Uos9eQdKDUpeixoj2mpSrRldkZ5IPewI2IrI0goWqxc" />
      <Hero heading="Lorem ipsum dolor sit amnsectetur adpisici do eiusmod tempor incidt ut" ></Hero>
      <PersonalInfo personalDetails={data.personalDetails}></PersonalInfo>
      <Biography></Biography>
      <Accordian heading="Education" items={data.educationArray}>
      </Accordian>
      <div>

        <BlogCardWrapper>
          <HeadingWrapper>
            <Heading>Blogs</Heading>
          </HeadingWrapper>
          {data.posts.map(
            ({ _id, title, mainImage, body, slug }) =>
              slug && (
                <BlogCard key={_id} title={title} mainImage={mainImage} body={body} slug={slug} ></BlogCard>
              )
          )}
        </BlogCardWrapper>
      </div>

      <ContactUs></ContactUs>
    </>
  )
}
