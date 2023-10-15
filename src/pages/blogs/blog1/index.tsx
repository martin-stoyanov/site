import React from 'react';
import styled from 'styled-components';

import { StyledAnchor } from '../../blog';
import BlogWrapper from '../BlogWrapper';

const Title = styled.h2`
  margin-bottom: 0.25rem;
  font-weight: 400;
`;
const Date = styled.i`
  font-weight: 300;
`;
const MainContent = styled.div`
  margin-top: 1rem;
  font-weight: 300;
`;

const Blog1 = () => (
  <BlogWrapper>
    <Title>Creating the blog section of my site</Title>
    <Date>October 14, 2023</Date>
    <MainContent>
      <p>
        The initial commit for this site was...{' '}
        <StyledAnchor href="https://github.com/martin-stoyanov/site/commit/7429aa9dc3c15c51709e908dee86b2a92eb76a99">
          July, 2020
        </StyledAnchor>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum
        optio, dolores repellendus porro sapiente quod consequuntur dicta
        tenetur, veritatis provident explicabo obcaecati ut! Exercitationem
        illum illo vel aperiam repellendus.
      </p>
    </MainContent>
  </BlogWrapper>
);

export default Blog1;
