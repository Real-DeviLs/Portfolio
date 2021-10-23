// client.js
import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'p3sb12fr', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})

export default client;
