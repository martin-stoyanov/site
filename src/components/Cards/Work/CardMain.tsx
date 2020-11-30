import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../../utils';

const CardMainDiv = styled.div`
  text-align: left;
  margin-left: 2em;
  @media ${breakpoints.sm} {
    text-align: center;
    margin-left: 0;
  }
`;

const CardTags = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  text-align: right;
`;

export const CardMain = ({ children }) => (
  <CardMainDiv>
    {children}
    <CardTags></CardTags>
  </CardMainDiv>
);
