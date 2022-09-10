import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../utils';

const Div = styled.div`
  border: 0.3rem solid ${(p) => p.borderColor};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  transition: ${(p) => p.hoverShadow};
  &:hover {
    box-shadow: 0 0 20px rgba(200, 200, 200, 0.3);
    transition: box-shadow 0.3s ease-in-out;
  }
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: row;
  background: ${(p: { backgroundColor: any }) => p.backgroundColor};
  text-align: center;
  padding: 2em;
  padding-bottom: 0em;
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

export const CardDiv = ({
  borderColor,
  hoverShadow,
  backgroundColor,
  children,
}) => (
  <Div
    borderColor={borderColor}
    hoverShadow={hoverShadow}
    backgroundColor={backgroundColor}
  >
    {children}
  </Div>
);
