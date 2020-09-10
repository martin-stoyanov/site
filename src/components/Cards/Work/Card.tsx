import React, { useState } from 'react';
import styled from 'styled-components';
import { CardMain } from './CardMain';
import { breakpoints } from '../../../utils';

const color = '#bbcaf6';

const CardParent = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  @media ${breakpoints.sm} {
    width: 250px;
  }
`;

const CardDiv = styled.div`
  // height: -moz-available;
  // height: -webkit-fill-available;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.1s ease-in-out;
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.3s ease-in-out;
  }
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: row;
  background: -webkit-linear-gradient(#3f485a, #414064);
  text-align: center;
  padding: 2em;
  padding-bottom: 3em;
  margin: 1em;
  border-radius: 3%;
  @media ${breakpoints.sm} {
    padding: 2em 1em;
    margin: 1em;
  }
  @media ${breakpoints.sm} {
    flex-direction: column;
  }
`;

const DownIcon = styled.i`
  transform: ${(props) => (props.isExpanded ? 'rotate(180deg);' : 'rotate(0);')}
  transition: transform 0.5s linear;
  // transform: rotate(180deg);
  position: relative;
  top: -60px;
  color: white;
  opacity: 0.6;
  font-size: 30px;
  @media ${breakpoints.sm} {
    top: -50px;
  }
  &:hover {
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
`;

const CardTitle = styled.h2`
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

const CardDescription = styled.p`
  font-family: Roboto Mono, monospace;
  font-size: 1.25rem;
  color: ${color};
`;

const CardBody = styled.p`
  margin-bottom: 0;
  font-size: 1rem;
  @media ${breakpoints.sm} {
    font-size: 0.85rem;
    margin-bottom: 2em;
  }
  color: ${color};
  line-height: 1.5;
`;

export const Card: React.FC<{
  title: string;
  description: string;
  date: string;
  shortText: JSX.Element;
  expandedText?: JSX.Element;
}> = ({ title, description, shortText, expandedText, date, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  console.log(date);
  return (
    <CardParent>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      />
      <CardDiv>
        {children}
        <CardMain>
          <CardTitle date={date}>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardBody>{isExpanded ? expandedText : shortText}</CardBody>
        </CardMain>
      </CardDiv>
      <DownIcon
        className="fas fa-arrow-circle-down"
        isExpanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      />
    </CardParent>
  );
};
