import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../utils';

const CardDiv = styled.div`
  box-shadow: '0 0 20px rgba(0, 0, 0, 0.2)';
  width: 80%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background: #005e9b;
  text-align: center;
  padding: 2em;
`;

export const Card: React.FC = ({ children }) => <CardDiv>{children}</CardDiv>;
