import React from 'react';
import styled from 'styled-components';

const IntroContent = styled.div`
  width: 80vw;
  height: 100%;
  margin-top: 5vh;
  //border: 2px solid #4f4763;
  font-family: Roboto Mono, monospace;
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
      <div style={{ padding: '10px', fontSize: '18px' }}>
        I'm a software developer interested in Javascript, React, and UX. I'm
        currently a senior at Cornell University.
      </div>
    </IntroContent>
  </IntroWrapper>
);
