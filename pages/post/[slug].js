import client from "../../client";
import { Blog } from "../../components";
import groq from 'groq'

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage,
  publishedAt,
  body
}`

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}

const Post = (props) => {
  const { title, mainImage, body, publishedAt } = props
  return (
    <Blog title={title} mainImage={mainImage} body={body} publishedAt={publishedAt}></Blog>
  )
}


export default Post
