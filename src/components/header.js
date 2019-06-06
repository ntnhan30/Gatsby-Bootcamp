import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";


import headerStyles from './header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
       query{
         site{
           siteMetadata {
             title
           }
         }
       }
  `)
  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.title}>
        <Link to="/">
        {data.site.siteMetadata.title}
        </Link>
      </h1>
        <nav>
            <ul className={headerStyles.navList}>
                <li >
      <Link  activeClassName={headerStyles.active} to="/" >
    Home
      </Link>
                </li>
                <li>
      <Link activeClassName={headerStyles.active} to="/about">
    About
      </Link>
            </li>
            <li>
      <Link activeClassName={headerStyles.active} to="/contact">
    Contact
      </Link>
            </li>
            <li>
      <Link activeClassName={headerStyles.active} to="/blog">
    Blog
      </Link>
            </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
