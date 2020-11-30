import React from 'react';
import styled from 'styled-components';
import { CardDiv } from '../CardDiv';
import { breakpoints } from '../../../utils';

const CardParent = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  place-items: center;
  @media ${breakpoints.sm} {
    width: 250px;
  }
  @media ${breakpoints.md} {
    min-width: 70vw;
  }
`;

export const Card: React.FC = ({ children }) => (
  <CardParent>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
    />
    <CardDiv
      borderColor="#deb1c0"
      hoverShadow="0 0 20px rgba(222, 177, 192, 0.4)"
      backgroundColor="rgba(222, 177, 192, 0.1)"
    >
      {children}
    </CardDiv>
  </CardParent>
);
