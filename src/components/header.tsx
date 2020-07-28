import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Image from './image';

const StyledLink = styled((props) => <Link {...props} />)`
  color: ${(p) => (p.theme.color === 'dark' ? 'white' : '#282C35')};
  text-decoration: none;
  text-transform: lowercase;
  padding: 25px 0;
  &:hover {
    color: #e6b8b8;
    &:before {
      width: 100%;
      transition: all ease-in-out 250ms;
    }
  }
  &:before {
    content: '';
    display: block;
    height: 5px;
    background-color: #e6b8b8;
    position: absolute;
    top: 0;
    width: 0%;
  }
`;

const StyledNav = styled.nav`
  float: right;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
    margin-left: 5vw;
    padding-top: 25px;
    position: relative;
  }
`;

const ImageWrapper = styled.div`
  float: left;
  width: 50px;
  padding: 10px 0;
`;

const HeaderWrapper = styled.div`
  background: #2c2835;
  width: 80vw;
  padding-left: 10vw;
  padding-right: 10vw;
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Link to="/">
      <ImageWrapper>
        <Image maxWidth="50px" style={{ border: '4px solid red' }} />
      </ImageWrapper>
    </Link>
    <StyledNav>
      <ul>
        <li>
          <StyledLink to="/">Projects</StyledLink>
        </li>
        <li>
          <StyledLink to="/">About</StyledLink>
        </li>
        <li>
          <StyledLink to="https://github.com/martin-stoyanov" target="_blank">
            Github
          </StyledLink>
        </li>
      </ul>
    </StyledNav>
  </HeaderWrapper>
);

Header.defaultProps = {
  siteTitle: ``,
};
