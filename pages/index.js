import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { PersonalInfo } from '../components'
import { Hero } from '../components'



export default function Home() {
  return (
    <>
      <Hero></Hero>
      <PersonalInfo></PersonalInfo>
    </>
  )
}
