import React from 'react';
import styled from 'styled-components';

const StyledCardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: 5vw;
  margin-right: 5vw;
`;

export const CardSection = ({ children }) => (
  <StyledCardSection>{children}</StyledCardSection>
);
