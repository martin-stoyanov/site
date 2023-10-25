import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import { breakpoints } from '../utils';

export const StyledAnchor = styled.a`
  color: pink;
  text-decoration: none;
  target: _blank;
`;

export const LinkText = styled.span`
  color: pink;
  text-decoration: none;
`;

export const BlogsWrapper = styled.div`
  margin-top: 2rem;
  width: 80%;
  justify-content: center;
`;

export const BlogLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  padding: 0.5rem;
  border-radius: 10px;
  @media ${breakpoints.md} {
    font-size: 14px;
  }
  &:hover {
    background-color: rgb(198, 179, 255, 0.2);
    &:before {
      width: 100%;
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <h1>Blog</h1>
      <BlogsWrapper>
        <Link
          to="/blogs/blog1/"
          style={{ color: 'pink', textDecoration: 'none' }}
        >
          <BlogLinkWrapper>
            <LinkText>Creating the blog section of my site</LinkText>
            <LinkText>October 24, 2023</LinkText>
          </BlogLinkWrapper>
        </Link>
        {/* <Link
          to="/blogs/blog2/"
          style={{ color: 'pink', textDecoration: 'none' }}
        >
          <BlogLinkWrapper>
            <LinkText>Blog 2</LinkText>
            <LinkText>Date</LinkText>
          </BlogLinkWrapper>
        </Link> */}
      </BlogsWrapper>
    </div>
  </Layout>
);

export default IndexPage;
