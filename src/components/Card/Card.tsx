import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../utils';

const CardParent = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
`;

const CardDiv = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: row;
  background: #4f4763;
  text-align: center;
  padding: 2em;
  padding-bottom: 3em;
  margin: 1em;
  border-radius: 3%;
  @media ${breakpoints.sm} {
    padding: 2em 1em;
  }
  @media ${breakpoints.md} {
    flex-direction: column;
  }
`;

const DownIcon = styled.i`
  position: relative;
  top: -55px;
  color: white;
  opacity: 0.6;
  font-size: 30px;
  &:hover {
    // color: #e6b8b8;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
`;

export const Card: React.FC = ({ children }) => (
  <CardParent>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
    />
    <CardDiv>{children}</CardDiv>
    <DownIcon className="fas fa-arrow-circle-down" />
  </CardParent>
);
