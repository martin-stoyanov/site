import React from 'react';
import styled from 'styled-components';

export const StyledCardTagsWrapper = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  text-align: right;
`;

export const CardTagsWrapper = ({ children }) => (
  <StyledCardTagsWrapper>{children}</StyledCardTagsWrapper>
);
