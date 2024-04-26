import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../utils';

const IntroContent = styled.div`
  width: 80vw;
  height: 100%;
  margin-top: 5vh;
  font-family: Roboto Mono, monospace;
  font-size: 18px;
  text-align: center;
  width: 80vw;
  @media ${breakpoints.sm} {
    width: 85vw;
    font-size: 16px;
  }
`;

const IntroWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 5vh;
  height: auto;
`;

export const TextIntro = () => (
  <IntroWrapper>
    <IntroContent>
      <div>
        I'm a software developer who likes Javascript, React, and UX. I'm
        currently a frontend developer at SentinelOne Inc.
      </div>
    </IntroContent>
  </IntroWrapper>
);
