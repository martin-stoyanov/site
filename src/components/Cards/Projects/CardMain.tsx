import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../../utils';

const CardMainDiv = styled.div`
  text-align: left;
  margin-left: 2em;
  @media ${breakpoints.md} {
    text-align: center;
    margin-left: 0;
  }
`;

const CardTags = styled.div``;

export const CardMain = ({ children }) => (
  <CardMainDiv>
    {children}
    <CardTags />
  </CardMainDiv>
);
