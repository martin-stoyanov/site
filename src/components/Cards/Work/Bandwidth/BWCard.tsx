import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { CardIntro } from '../CardIntro';
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

const shortText = () => (
  <span>
    Worked with the frontend team on the Bandwidth Dashboard, one of the
    company's main products and used by clients to purchase and manage orders.
    Gained experience contributing a live production codebase and creating tests
    for it
  </span>
);

const expandedText = () => (
  <div>
    <ul>
      <li>
        Worked with the frontend team on the Bandwidth Dashboard, one of the
        company's main products and used by clients to purchase and manage
        orders.
      </li>
      <li>
        Built search forms using Formik and used GraphQL to communicate with
        Bandwidth’s API
      </li>
      <li>
        For each contribution: created tests on a∼1 : 1 test/code ratio. Used
        Jest + React Testing Library to create unit and integration tests. Used
        Cypress to create functional tests
      </li>
      <li>
        Discussed design ideas with UX team to improve mobile responsiveness on
        Bandwidth’s in-house visual component library
      </li>
      <li>
        Implemented UX team's prototypes into the component library, which is
        built on top of Material-UI with React
      </li>
    </ul>
  </div>
);

export const BWCard = () => (
  <Card
    title="Bandwidth Inc."
    date="May 2020 - July 2020"
    description="Software Dev Intern (Remote)"
    shortText={shortText()}
    expandedText={expandedText()}
  >
    <CardIntro>
      <CardImage src={bw_logo} alt="" />
      <IconList>
        <li>
          <IconLink
            href="https://www.bandwidth.com/"
            target="_blank"
            style={{ ariaLabel: 'Company Link' }}
          >
            <i className="fas fa-link" />
          </IconLink>
        </li>
      </IconList>
    </CardIntro>
  </Card>
);
