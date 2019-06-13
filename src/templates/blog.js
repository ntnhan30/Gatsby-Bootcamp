import React from 'react';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';


import blogStyles from './blog.module.scss';
import Layout from '../components/layout';

export const query = graphql`
query (
    $slug: String!
  ){
    markdownRemark(
      fields: {
        slug: {
          eq:$slug
        }
      }
    ){
      frontmatter{
        title
        date
        pic {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pic2 {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    
    }
  }
`

const Blog = (props) => {
    return (
        <Layout>
           <h1>{props.data.markdownRemark.frontmatter.title}</h1>
           <div className={blogStyles.imgDiv}>
           <Img  className={blogStyles.img} fluid={props.data.markdownRemark.frontmatter.pic.childImageSharp.fluid}/>
           <Img  className={blogStyles.img} fluid={props.data.markdownRemark.frontmatter.pic2.childImageSharp.fluid}/>
           </div>
           <p>{props.data.markdownRemark.frontmatter.date}</p>
           {/* <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html }} className={blogStyles.imgDiv} >    
           </div> */}
        </Layout>
    )
}

export default Blog