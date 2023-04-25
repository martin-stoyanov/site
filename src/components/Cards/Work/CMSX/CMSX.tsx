import React from 'react';
import styled from 'styled-components';
import { Card, CardBody, CardDescription, CardTitle } from '../Card';
import { CardIntro } from '../CardIntro';
import { breakpoints } from '../../../../utils';
import { CardTagsWrapper } from '../../CardTagsWrapper';
// @ts-ignore
import cornell_seal from './cornell_seal.png';
import { CardMain } from '../CardMain';

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
    Frontend lead for the team that develops and maintains Cornell’s in-house
    Course Management System, used by over 8000 students and course staff every
    semester. Currently leading projects to improve initial load time, improve
    code reuse, and rewrite the user documentation site.
  </span>
);

const expandedText = () => (
  <div>
    <ul>
      <li>
        Part of the team that develops and maintains Cornell’s in-house Course
        Management System, used by over 8000 students and course staff as an
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
  <Card>
    <CardIntro>
      <CardImage src={cornell_seal} alt="" />
      <IconList>
        <li>
          <IconLink
            href="https://www.cs.cornell.edu/projects/cms/cmsx/"
            target="_blank"
            style={{ ariaLabel: 'Project Link' }}
          >
            <i className="fas fa-link" />
          </IconLink>
        </li>
      </IconList>
    </CardIntro>
    <CardMain>
      <CardTitle date="October 2019 - May 2021">Cornell University.</CardTitle>
      <CardDescription>Software Development Lead</CardDescription>
      <CardBody>
        Frontend lead for the team that develops and maintains Cornell’s
        in-house Course Management System, used by over 8000 students and course
        staff every semester. Currently leading projects to improve initial load
        time, improve code reuse, and rewrite the user documentation site.
      </CardBody>
      <CardTagsWrapper>
        <p style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '12px' }}>
          React, Typescript, Java
        </p>
      </CardTagsWrapper>
    </CardMain>
  </Card>
);
