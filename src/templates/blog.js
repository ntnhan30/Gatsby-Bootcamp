import React from 'react';
import {graphql} from 'gatsby';

import Layout from '../components/layout';

// export const query = graphql`
// query (
//     $slug: String!
//   ){
//     markdownRemark(
//       fields: {
//         slug: {
//           eq:$slug
//         }
//       }
//     ){
//       frontmatter{
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
query($slug: String!){
  contentfulBlogPost(slug:{eq:$slug}) {
    title
    publishDate(formatString:"MMMM Do, YYYY")
  }
}
`


const Blog = (props) => {
  console.log(props.data)
    return (
        <Layout>
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.publishedDate}</p>
      
        </Layout>
    )
}

export default Blog