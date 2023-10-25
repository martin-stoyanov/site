import React from 'react';
import styled from 'styled-components';

import { StyledAnchor } from '../../blog';
import blogPage from '../blog1/blog-temp-page.png';
import BlogWrapper from '../BlogWrapper';

const Title = styled.h2`
  margin-bottom: 0.25rem;
  font-weight: 500;
`;
const Date = styled.i`
  font-weight: 300;
`;
const MainContent = styled.div`
  margin-top: 1rem;
  font-weight: 500;
`;

const Blog1 = () => (
  <BlogWrapper>
    <Title>Creating the blog section of my site</Title>
    <Date>October 24, 2023</Date>
    <MainContent>
      <p>
        The initial commit for this site was...{' '}
        <StyledAnchor href="https://github.com/martin-stoyanov/site/commit/7429aa9dc3c15c51709e908dee86b2a92eb76a99">
          July, 2020.
        </StyledAnchor>{' '}
        I wanted to publish the site quickly, so I left the blog section in an
        unfinished state and with a "temporary" doggy. This is what it looked
        like:
      </p>
      <div style={{ textAlign: 'center' }}>
        <img
          width={700}
          src={blogPage}
          loading="lazy"
          alt="Image of temporary blog with a dog wearing construction hat"
          style={{ border: '0.25rem solid pink' }}
        />
      </div>
      <p>
        The construction doggo stayed way longer than I'd have expected (around
        23 dog years, in fact). Even though I kept coming back to work on the
        blog, I kept trying to make a "perfect" solution, whether it be
        installing a CMS library, implementing my own markdown infrastructure,
        or some other things that I've forgotten by now.
      </p>
      <p>
        Now, finally, I've got my blog up and running. It's just simple HTML,
        but it works, and I'm happy with it.
      </p>
      <p>
        The only problem is I haven't implemented a comment section for my
        millions of rabid fans. Sorry ¯\_(ツ)_/¯
      </p>
    </MainContent>
  </BlogWrapper>
);

export default Blog1;
