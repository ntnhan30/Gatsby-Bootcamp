import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby";
import blogStyles from './blog.module.scss';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {data.allMarkdownRemark.edges.map(i => {
            return (
              <li key={i.node.fields.slug}>
              <Link to={`/blog/${i.node.fields.slug}`}>
                <h2>{i.node.frontmatter.title}</h2>
                <p>{i.node.frontmatter.date}</p>
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
