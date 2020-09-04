import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { CardMain } from '../CardMain';
import { CardIntro } from '../CardIntro';
import { breakpoints } from '../../../../utils';
// @ts-ignore
import joe_rogan from './joe_rogan.png';

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

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-family: Roboto Mono, monospace;
  &:after {
    font-size: 0.8rem;
    content: 'Valid 2021 onwards';
    display: block;
    // height: 2px;
    // width: 2em;
    // background: ${color};
    // opacity: 0.3;
    margin: 0.8em 0 0;
    @media ${breakpoints.md} {
      margin: 0.8em auto 0;
    }
  }
`;

const CardDescription = styled.p`
  font-family: Roboto Mono, monospace;
  font-size: 1.25rem;
  color: ${color};
  &:after {
    font-size: 0.8rem;
    content: 'Valid 2021 onwards';
    display: block;
    // height: 2px;
    // width: 2em;
    // background: ${color};
    // opacity: 0.3;
    margin: 0.8em 0 0;
    @media ${breakpoints.md} {
      margin: 0.8em auto 0;
    }
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

export const CMSXCard = () => (
  <Card>
    <CardIntro>
      <CardImage src={joe_rogan} alt="" />
      {/* <IconList>
        <li className="card-icon">
          <IconLink
            href="https://research.cs.cornell.edu/Projects/cms/"
            target="_blank"
            style={{ ariaLabel: 'Project Link' }}
          >
            <i className="fas fa-link" />
          </IconLink>
        </li>
      </IconList> */}
    </CardIntro>
    <CardMain>
      {/* <CardTitle>UFC Evening Coupon</CardTitle> */}
      <CardDescription>UFC + Papa Johns + Drinks Coupon</CardDescription>
      <CardBody>
        This coupon entitles the user to a Papa Johns pizza during a UFC event.
        Alcoholic drinks are included!
      </CardBody>
    </CardMain>
  </Card>
);
