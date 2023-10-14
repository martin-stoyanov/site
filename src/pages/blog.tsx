import React from 'react';

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
        src="https://tinyurl.com/mr2vhezv"
        loading="lazy"
        alt="construction dog"
        style={{ maxWidth: '200px', borderRadius: '10px' }}
      />
      {/* <Link to="/blogs/blog1/">Go to "Using TypeScript"</Link> */}
    </div>
  </Layout>
);

export default IndexPage;
