import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../utils';

const StyledHeader = styled.h2`
  color: ${(p) => p.color};
  display: grid;
  place-items: center;
  min-width: max-content;
  font-family: Roboto Mono, monospace;
  font-size: 34px;
  @media ${breakpoints.sm} {
    font-size: 28px;
  }
`;

export const CardHeader = ({ color = 'white', children }) => (
  <StyledHeader color={color}>{children}</StyledHeader>
);
