import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
    return (
        <Layout>
        <h1>Hello.</h1>
            <h2>I'm Nhan, a full stack developer living in dirty Berlin</h2>
            <Link to="/contact">Contact me</Link>
        </Layout>
    )
  
}
export default IndexPage