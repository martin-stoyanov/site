import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from '../components/image';
import Layout from '../components/layout';

const typing = keyframes`
  from {
    width: 0
  } 
`;
const blink = keyframes`
  50% {
    border-color: transparent
  }
`;
const TypedDivWrapper = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30vh;
`;

const TypedText = styled.div`
  width: ${(p) => p.width}ch;
  animation: ${typing} 2s steps(${(p) => p.width}),
    ${blink} 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: Roboto Mono, monospace;
  font-size: 38px;
`;

// based on https://codepen.io/denic/pen/GRoOxbM
const TypedDiv = (props) => (
  <TypedDivWrapper>
    <TypedText width={props.width}>{props.children}</TypedText>
  </TypedDivWrapper>
);

export default function UsersList() {
  return (
    <Layout>
      <TypedDiv width={14}>hi i'm martin.</TypedDiv>
      <div style={{ width: '100px' }}>{/* <Image /> */}</div>
    </Layout>
  );
}
