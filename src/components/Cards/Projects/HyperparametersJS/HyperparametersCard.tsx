import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { CardMain } from '../CardMain';
import { breakpoints } from '../../../../utils';
// @ts-ignore
import bw_logo from './bw_logo.png';

const color = '#bbcaf6';

const IconList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  width: 100px;
  margin: 0 auto;
`;

const IconLink = styled.a`
  color: ${color};
  opacity: 0.5;
  font-size: 1.25rem;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-family: Roboto Mono, monospace;
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

export const HyperparametersCard = () => (
  <Card>
    <CardMain>
      <CardTitle>HyperparametersJS</CardTitle>
      <IconList>
        <li>
          <IconLink
            href="https://hyperjs.herokuapp.com/"
            target="_blank"
            style={{ ariaLabel: 'HyperparametersJS Website' }}
          >
            <i className="fas fa-link" />
          </IconLink>
        </li>
        <li>
          <IconLink
            href="https://github.com/martin-stoyanov/hyperparameters-site"
            target="_blank"
            style={{ ariaLabel: 'HyperparametersJS Github Link' }}
          >
            <i className="fab fa-github" />
          </IconLink>
        </li>
      </IconList>
      <CardBody>
        HPJS is a Javascript hyperparameter optimization library for
        tensorflow.js machine learning models. I built the website showcasing
        the library. The frontend uses React/Next.JS with Tensorflow.js to
        showcase examples of the library in action. I build the backend with
        Python, using Django, Postgres, and GraphQL
      </CardBody>
    </CardMain>
  </Card>
);
