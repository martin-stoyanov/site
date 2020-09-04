import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../../utils';

const CardIntroDiv = styled.div``;

export const CardIntro = ({ children }) => (
  <CardIntroDiv>{children}</CardIntroDiv>
);
