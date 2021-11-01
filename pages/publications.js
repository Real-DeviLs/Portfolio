import { Hero, Accordian, ContactUs } from '../components'
import client from "../client";
import groq from 'groq'



const publicationCategoriesQuery = groq`*\[_type=="publicationCategory"\]|order(orderRank)`;

const publicationsQuery = groq`*\[_type=="publications"\]|order(orderRank){
    publicationDate,
    title,
    publisher,
    details,
    category->{category}
}`;

function serialize(map) {
  return JSON.stringify([...map.entries()])
}

export async function getStaticProps() {
  const publicationCategories = await client.fetch(publicationCategoriesQuery);
  const publications = await client.fetch(publicationsQuery);

  const publicationMap = new Map();



  publications.map((publication) => {

    let category = "Uncategorized";

    if (publication.category != undefined) {
      category = publication.category.category
    }

    if (!publicationMap.has(category)) {
      const publicationObject = {
        date1: publication.publicationDate,
        date2: "",
        details: publication.details,
        title: publication.title,
        subTitle: publication.publisher,

      }
      publicationMap.set(category, [publicationObject]);

    }
    else {

      let list = publicationMap.get(category);
      const publicationObject = {
        date1: publication.publicationDate,
        date2: "",
        details: publication.details,
        title: publication.title,
        subTitle: publication.publisher,

      }
      list.push(publicationObject);
      publicationMap.set(category, list);

    }
  })
  let publication_map = serialize(publicationMap);
  let data = { publicationCategories, publication_map }
  return {
    props: {
      data,

    },
    revalidate: 1,
  };
}


export default function publications(props) {

  let publicationMap = JSON.parse(props.data.publication_map).reduce((m, [key, val]) => m.set(key, val), new Map());
  let keys = [...publicationMap.keys()]

  return (
    <>
      <Hero heading="Publications" />
      {
        keys.map((key) => {
          if (publicationMap.get(key) !== undefined) {
            return (
              <Accordian heading={key} items={publicationMap.get(key)} />)
          }
        })
      }
      <ContactUs></ContactUs>
    </>
  )
}
