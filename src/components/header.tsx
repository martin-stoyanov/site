import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { breakpoints } from '../utils';
import Image from './image';

const StyledLink = styled((props) => <Link {...props} />)`
  color: ${(p) => (p.theme.color === 'dark' ? 'white' : '#282C35')};
  text-decoration: none;
  text-transform: lowercase;
  padding: 25px 0;
  font-size: 16px;
  font-family: Roboto Mono, monospace;
  transition: color ease-in-out 250ms;
  @media ${breakpoints.sm} {
    display: ${(p) => (p.optional ? 'none' : 'visible')};
    font-size: 14px;
  }
  &:hover {
    color: #c6b3ff;
    &:before {
      width: 100%;
    }
  }
  &:before {
    transition: all ease-in-out 250ms;
    content: '';
    display: block;
    height: 1px;
    background-color: #c6b3ff;
    position: relative;
    top: 25px;
    width: 0%;
  }
`;

const StyledA = styled((props) => <a {...props} />)`
  color: ${(p) => (p.theme.color === 'dark' ? 'white' : '#282C35')};
  text-decoration: none;
  text-transform: lowercase;
  padding: 25px 0;
  font-size: 16px;
  font-family: Roboto Mono, monospace;
  transition: color ease-in-out 250ms;
  @media ${breakpoints.sm} {
    font-size: 14px;
  }
  &:hover {
    color: #c6b3ff;
    cursor: pointer;
    &:before {
      width: 100%;
    }
  }
  &:before {
    transition: all ease-in-out 250ms;
    content: '';
    display: block;
    height: 1px;
    background-color: #c6b3ff;
    position: relative;
    top: 25px;
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
    margin-left: 3vw;
    padding-top: 4vh;
    position: relative;
  }
`;

const ImageWrapper = styled.div`
  float: left;
  width: 50px;
  padding: 1.5vh 0;
`;

const HeaderWrapper = styled.div`
  min-height: 10vh;
  background: #3d4d54;
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
          <StyledLink to="/#work">Work</StyledLink>
        </li>
        <li>
          <StyledLink to="/#projects" optional={'true'}>
            Projects
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/blog">Blog</StyledLink>
        </li>
        <li>
          <StyledA href="https://github.com/martin-stoyanov" target="_blank">
            Github
          </StyledA>
        </li>
      </ul>
    </StyledNav>
  </HeaderWrapper>
);

Header.defaultProps = {
  siteTitle: ``,
};
