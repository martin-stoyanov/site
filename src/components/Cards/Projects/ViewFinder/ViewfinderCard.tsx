import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { CardMain } from '../CardMain';
import { breakpoints } from '../../../../utils';
import { CardTagsWrapper } from '../../CardTagsWrapper';

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
  }
  color: ${color};
  line-height: 1.5;
`;

export const ViewFinder = () => (
  <Card>
    <CardMain>
      <CardTitle>ViewFinder</CardTitle>
      <IconList>
        <li>
          <IconLink
            href="https://travel-bucket.foxhatleo.now.sh/"
            target="_blank"
            style={{ ariaLabel: 'ViewFinder' }}
          >
            <i className="fas fa-link" />
          </IconLink>
        </li>
        <li>
          <IconLink
            href="https://github.com/foxhatleo/travel-bucket-frontend"
            target="_blank"
            style={{ ariaLabel: 'ViewFinder Github Link' }}
          >
            <i className="fab fa-github" />
          </IconLink>
        </li>
      </IconList>
      <CardBody>
        A photo spot recommender. Give the app a city and some photo genres
        (nature, skyline, etc.), and ViewFinder parses Google reviews and
        returns photo spots you might like! Note: the backend server uses
        Heroku's free tier so there will be a ~30 second startup delay
      </CardBody>
      <CardTagsWrapper>
        <p style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '12px' }}>
          Flask, Python, Axios, React
        </p>
      </CardTagsWrapper>
    </CardMain>
  </Card>
);
