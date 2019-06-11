import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby";
import blogStyles from './blog.module.scss';
import Head from '../components/head';


const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost (
      sort: {
        fields: publishDate,
        order: DESC
      }
    ){
      edges{
        node{
          title
          slug
          publishDate(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
  `)
  return (
    <Layout>
      <Head title="Blog"/>
      <div>
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map(i => {
            return (
              <li key={i.node.slug}>
              <Link to={`/blog/${i.node.slug}`}>
                <h2>{i.node.title}</h2>
                <p>{i.node.publishDate}</p>
              </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage
