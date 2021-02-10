import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../utils';

export const StyledCardTagsWrapper = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  text-align: right;
  @media ${breakpoints.sm} {
    margin: 0;
    padding: 0;
  }
`;

export const CardTagsWrapper = ({ children }) => (
  <StyledCardTagsWrapper>{children}</StyledCardTagsWrapper>
);
