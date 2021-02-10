import React, { useState } from 'react';
import styled from 'styled-components';
import { CardMain } from './CardMain';
import { CardDiv } from '../CardDiv';
import { breakpoints } from '../../../utils';

const color = '#bbcaf6';

const CardParent = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  @media ${breakpoints.sm} {
    width: 250px;
  }
  @media ${breakpoints.md} {
    min-width: 70vw;
  }
`;

// need a wrapper so the rotate animation will work
const DownIconWrapper = styled.span`
  transform: ${(props) => (props.isExpanded ? 'rotate(180deg);' : 'rotate(0);')}
  transition: transform 0.3s linear;
  position: relative;
  top: -60px;
`;

const DownIcon = styled.i`
  color: white;
  opacity: 0.6;
  font-size: 30px;
  @media ${breakpoints.sm} {
    top: -60px;
  }
  &:hover {
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-family: Roboto Mono, monospace;
  &:after {
    font-size: 0.8rem;
    content: '${(props) => props.date}';
    display: block;
    margin: 0.8em 0 0;
    @media ${breakpoints.md} {
      margin: 0.8em auto 0;
    }
  }
`;

export const CardDescription = styled.p`
  font-family: Roboto Mono, monospace;
  font-size: 1.15rem;
  color: ${color};
`;

export const CardBody = styled.p`
  margin-bottom: 0;
  font-size: 1rem;
  @media ${breakpoints.sm} {
    font-size: 0.85rem;
  }
  color: ${color};
  line-height: 1.5;
`;

export const Card: React.FC = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <CardParent>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      />
      <CardDiv
        borderColor="#b3ccff"
        hoverShadow="0 0 20px rgba(200, 200, 200, 0.3)"
        backgroundColor="rgba(179, 204, 255, 0.2)"
      >
        {children}
      </CardDiv>
      {/* <DownIconWrapper
        isExpanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <DownIcon className="fas fa-arrow-circle-down" />
      </DownIconWrapper> */}
    </CardParent>
  );
};
