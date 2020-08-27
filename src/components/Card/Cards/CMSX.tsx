import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { CardMain } from '../CardMain';
import { CardIntro } from '../CardIntro';
import { breakpoints } from '../../../utils';

const IconList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  width: 100px;
  margin: 0 auto;
`;

const IconLink = styled.a`
  color: #5bcbf0;
  opacity: 0.5;
  font-size: 1.25rem;
`;

const CardImage = styled.img`
  border-radius: 50%;
  border: 5px solid white;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  &:after {
    content: '';
    display: block;
    height: 2px;
    width: 2em;
    background: #5bcbf0;
    opacity: 0.5;
    margin: 0.8em auto 0;
  }
`;

const CardDescription = styled.p``;

export const CMSXCard = () => (
  <Card>
    <CardIntro>
      <CardImage src="https://i.pravatar.cc/125" alt="" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      />
      <IconList>
        <li className="card-icon">
          {/* TODO: add aria-label */}
          <IconLink href="">
            <i className="fab fa-github" />
          </IconLink>
        </li>
        <li className="card-icon">
          <IconLink href="">
            <i className="fas fa-link" />
          </IconLink>
        </li>
      </IconList>
    </CardIntro>
    <CardMain>
      <CardTitle>Cornell University</CardTitle>
      <CardDescription>Software Developer</CardDescription>
      <p className="card-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ut
        vel atque suscipit debitis porro inventore iste optio voluptatum autem?
        Cupiditate mollitia perferendis velit. Ullam repellendus dolorem
        reprehenderit sed recusandae!
      </p>
    </CardMain>
  </Card>
);
