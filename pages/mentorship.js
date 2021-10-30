import { Hero,Accordian,ContactUs } from '../components'
import client from "../client";
import groq from 'groq'


const mentorshipQuery = groq`*[_type=="mentorship"]|order(orderRank)`


export async function getStaticProps(){

    const mentorships = await client.fetch(mentorshipQuery);

    const dataArray = [];
    mentorships.map(item=>{

    const mentorship_object =  {
        date1: item.mentorshipStart,
        date2: item.mentorshipEnd,
        details:item.details,
        title: item.menteeName,
        subTitle: item.institute,
        }    
        dataArray.push(mentorship_object);   
    })

 
    return {
        props: {
            dataArray
        },
        revalidate:1,
    }
}   


export default function mentorship(props){
    

    const mentorships = props.dataArray;
    return(
        <>
        <Hero heading="Students Mentored"></Hero>
        <Accordian heading = "Students Mentored" items={mentorships}> </Accordian>
        </>
    )
}