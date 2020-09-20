import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { breakpoints } from '../../utils';

import Layout from '../../components/layout';

const BlogWrapper = styled.div`
  display: grid;
  place-items: center;
  margin: 5vh 15vh 0 15vh;
  @media ${breakpoints.md} {
    margin: 5vh 5vh 0 5vh;
  }
`;

const IndexPage = () => (
  <Layout>
    <BlogWrapper>
      <h2>Title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum
        optio, dolores repellendus porro sapiente quod consequuntur dicta
        tenetur, veritatis provident explicabo obcaecati ut! Exercitationem
        illum illo vel aperiam repellendus.
      </p>
    </BlogWrapper>
  </Layout>
);

export default IndexPage;
