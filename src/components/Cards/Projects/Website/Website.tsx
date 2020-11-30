import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { CardMain } from '../CardMain';
import { breakpoints } from '../../../../utils';

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

export const WebsiteCard = () => (
  <Card>
    <CardMain>
      <CardTitle>This Website!</CardTitle>
      <IconList>
        <li>
          <IconLink
            href="https://github.com/martin-stoyanov/site"
            target="_blank"
            style={{ ariaLabel: 'Website Link' }}
          >
            <i className="fab fa-github" />
          </IconLink>
        </li>
      </IconList>
      <CardBody>
        I built this portfolio website with Gatsby, Tylescript and Styled
        Components. My goals for this site were to (1) learn Gatsby and Styled
        Components (2) Create a website using no external styling libraries (so
        all CSS is written by me) and (3) have somewhere to show off my projects
      </CardBody>
    </CardMain>
  </Card>
);
