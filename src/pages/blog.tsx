import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <h1>Ruh roh!</h1>
      <p>This blog is a work in progress</p>
      <img
        src="https://tinyurl.com/yyrd2npd"
        loading="lazy"
        alt="construction dog"
        style={{ maxWidth: '200px', borderRadius: '10px' }}
      />
      <Link to="/blog/blog1/" style={{ marginTop: '20px', color: 'white' }}>
        First Post
      </Link>
    </div>
  </Layout>
);

export default IndexPage;
