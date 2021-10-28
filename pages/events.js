import { Hero,Accordian,ContactUs } from '../components'
import client from "../client";
import groq from 'groq'

const eventCategoriesQuery  = groq`*\[_type=="eventCategory"\]|order(orderRank)`;

const eventsQuery = groq`*\[_type=="events"\]|order(orderRank){
    date,
    title,
    locataion,
    details,
    category->{category}
}`;

function serialize (map) {
    return JSON.stringify([...map.entries()])
  }

  export async function getStaticProps(){
    const eventCategories = await client.fetch(eventCategoriesQuery);
    const events = await client.fetch(eventsQuery);

    const eventMap = new Map();



    events.map((event)=>{

        let category = "Uncategorized";

        if(event.category!=undefined)
        {
            category = event.category.category
        }
        
        if(!eventMap.has(category))
        {   
            const publicationObject = {
                date1: event.date,
                details:event.details,
                title: event.title,
                subTitle: event.location,
                
            }
            eventMap.set(category,[publicationObject]);

        }
        else{

            let list =    eventMap.get(category);
            const publicationObject = {
                date1: event.date,
                details:event.details,
                title: event.title,
                subTitle: event.location,
                
            }
            list.push(publicationObject);
            eventMap.set(category,list);
           
        }
    })
    let event_map = serialize(eventMap);
    let data = {eventCategories, event_map}
    return {
        props:{
            data,
           
        },
        revalidate: 1,
    };
}





export default function events(props){
    let eventMap = JSON.parse(props.data.event_map).reduce((m, [key, val])=> m.set(key, val) , new Map());
    let keys = [...eventMap.keys()]
 

    return(
        <>
            <Hero heading="events Attended and Organized"></Hero>
            {
            keys.map((key) =>{
                if(eventMap.get(key) !== undefined)
                    {
                        console.log("ethe");
                        return(    
                            <Accordian heading={key} items={eventMap.get(key)} />)
                    }
                   })
                }
        <ContactUs></ContactUs>
            
        </>
    ) 
}