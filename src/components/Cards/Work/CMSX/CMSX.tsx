import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { CardIntro } from '../CardIntro';
import { breakpoints } from '../../../../utils';
// @ts-ignore
import cornell_seal from './cornell_seal.png';

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
    Part of the team that develops and maintains Cornell’s in-house Course
    Management System, used by over 8000 students and course staff as an
    alternative to Blackboard and Canvas. Since Jan 2020, I've been a front-end
    lead of the team.
  </span>
);

const expandedText = () => (
  <div>
    <ul>
      <li>
        Part of the team that develops and maintains Cornell’s in-house Course
        Management System, used by over8000 students and course staff as an
        alternative to Blackboard and Canvas.
      </li>
      <li>
        Helped move from Java app to REST-API based React/Redux/Typescript app.
      </li>
      <li>
        Beta released Spring semester 2020, full release Fall semester 2020
      </li>
      <li>
        <i>Work examples</i>: Create reusable components, create forms w/
        validation (e.g. a regrade request form), ADA compliance, create API
        endpoints w/ Axios
      </li>
      <li>
        As a front-end lead since Jan 2020, I've: introduced new members to the
        codebase, delegated tasks + helped team members with them, reviewed pull
        requests and provided actionable feedback when necessary, and added code
        formatting and pre-commit hooks using Husky & Prettier to keep codebase
        clean and consistent
      </li>
    </ul>
  </div>
);

export const CMSXCard = () => (
  <Card
    title="Cornell University"
    description="Software Developer"
    date="October 2019 - Present"
    shortText={shortText()}
    expandedText={expandedText()}
  >
    <CardIntro>
      <CardImage src={cornell_seal} alt="" />
      <IconList>
        <li className="card-icon">
          <IconLink
            href="https://research.cs.cornell.edu/Projects/cms/"
            target="_blank"
            style={{ ariaLabel: 'Project Link' }}
          >
            <i className="fas fa-link" />
          </IconLink>
        </li>
      </IconList>
    </CardIntro>
    {/* <CardMain>
        <CardTitle>Cornell University</CardTitle>
        <CardDescription>Software Developer</CardDescription>
        <CardBody>{shortBody}</CardBody>
      </CardMain> */}
  </Card>
);
