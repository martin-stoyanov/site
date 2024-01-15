import React from 'react';
import styled from 'styled-components';
import { Card, CardBody, CardDescription, CardTitle } from '../Card';
import { CardIntro } from '../CardIntro';
import { CardMain } from '../CardMain';
import { CardTagsWrapper } from '../../../Cards/CardTagsWrapper';
import { breakpoints } from '../../../../utils';
// @ts-ignore
import s1logo from './s1logo.png';

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

const CardImage = styled.img`
  width: 100px;
  margin-bottom: 1em;
  @media ${breakpoints.md} {
    width: 80px;
    margin-bottom: 0.5em;
  }
  border-radius: 50%;
  // border: 5px solid white;
`;

const shortText = () => <span></span>;

const expandedText = () => (
  <div>
    <ul></ul>
  </div>
);

export const S1Card = () => (
  <Card>
    <CardIntro>
      <CardImage src={s1logo} alt="" />
      <IconList>
        <li>
          <IconLink
            href="https://www.sentinelone.com/"
            target="_blank"
            style={{ ariaLabel: 'Company Link' }}
          >
            <i className="fas fa-link" />
          </IconLink>
        </li>
      </IconList>
    </CardIntro>
    <CardMain>
      <CardTitle date="December 2023 - Present">SentinelOne Inc.</CardTitle>
      <CardDescription>Software Developer, Frontend</CardDescription>
      <CardBody>
        Adding features to web console/dashboard. Testing them with Playwright
      </CardBody>
      <CardTagsWrapper>
        <p style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '12px' }}>
          React, Typescript, Nx, Material UI, Playwright
        </p>
      </CardTagsWrapper>
    </CardMain>
  </Card>
);
