import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h2`
  display: grid;
  place-items: center;
  min-width: max-content;
  font-family: Roboto Mono, monospace;
  font-size: 28px;
`;

export const CardHeader = ({ children }) => (
  <StyledHeader>{children}</StyledHeader>
);
