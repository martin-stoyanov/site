import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: 5vw;
  margin-right: 5vw;
`;

export const CardsMain = ({ children }) => <StyledDiv>{children}</StyledDiv>;
