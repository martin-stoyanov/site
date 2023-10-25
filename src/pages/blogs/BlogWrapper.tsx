import React from 'react';
import styled from 'styled-components';

import { breakpoints } from '../../utils';
import Layout from '../../components/layout';

const BlogDiv = styled.div`
  display: grid;
  place-items: center;
  margin: auto;
  width: 60%;
  @media ${breakpoints.md} {
    width: 60%;
  }
  @media ${breakpoints.sm} {
    width: 90%;
  }
`;

const BlogWrapper = ({ children }) => (
  <Layout>
    <BlogDiv>{children}</BlogDiv>
  </Layout>
);

export default BlogWrapper;
