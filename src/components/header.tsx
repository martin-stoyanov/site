import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { breakpoints } from '../utils';
import Image from './image';

import './header.css';

const StyledLink = styled((props) => <Link {...props} />)`
  color: ${(p) => (p.theme.color === 'dark' ? 'white' : '#282C35')};
  text-decoration: none;
  text-transform: lowercase;
  font-size: 16px;
  font-family: Roboto Mono, monospace;
  transition: color ease-in-out 250ms;
  @media ${breakpoints.md} {
    font-size: 14px;
    // padding: 0.5rem 1rem;
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

const ImageWrapper = styled.div`
  float: left;
  width: 50px;
  padding: 25px 0;
`;

const HeaderWrapper = styled.header`
  background: #3d4d54;
  width: 80vw;
  padding-left: 10vw;
  padding-right: 10vw;
  &:after {
    content: '';
    display: table;
    clear: both;
  }
  @media ${breakpoints.sm} {
    flex-direction: column;
    align-items: flex-start;
    transition: height 0.36s ease;
    height: ${(props) => (props.toggleOpen ? '270px' : '100px')};
  }
`;

const ToggleButton = styled.a`
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  padding: 25px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24.5px;
  transition: all 0.5s;
  @media ${breakpoints.sm} {
    display: flex;
  }
`;

const ToggleBar = styled.span`
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  display: none;
  transition: transform 0.5s;
  @media ${breakpoints.sm} {
    display: flex;
  }
`;

const StyledNav = styled.nav`
  float: right;
  @media ${breakpoints.sm} {
    width: 100%;
  }
`;

const NavUL = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  @media ${breakpoints.sm} {
    display: flex;
    flex-direction: column;
    transition: transform 0.36s ease;
    transform-origin: top;
    transform: ${(props) => (props.toggleOpen ? 'scaleY(1)' : 'scaleY(0)')};
  }
`;

const NavLI = styled.li`
  display: flex;
  flex-direction: column;
  display: inline-block;
  padding-top: 40px;
  padding-right: 20px;
  position: relative;
  @media ${breakpoints.sm} {
    padding-top: 0px;
    padding-bottom: 20px;
    text-align: center;
    flex-direction: row;
    display: ${(props) => (props.toggleOpen ? 'inline-block' : 'none')};
  }
`;

export const Header: React.FC = () => {
  const [toggleOpen, setToggleOpen] = useState<boolean>(false);

  const changeToggle = () => {
    setToggleOpen(!toggleOpen);
  };

  return (
    <HeaderWrapper toggleOpen={toggleOpen}>
      <Link to="/">
        <ImageWrapper>
          <Image maxWidth="50px" style={{ border: '4px solid red' }} />
        </ImageWrapper>
      </Link>
      <ToggleButton href="#" onClick={() => setToggleOpen(!toggleOpen)}>
        <ToggleBar
          style={{
            transform: toggleOpen ? 'rotate(-45deg)' : 'rotate(0deg)',
            transformOrigin: '100% 50%',
          }}
        />
        <ToggleBar
          style={{
            opacity: toggleOpen ? '0' : '100',
            width: toggleOpen ? '0px' : '30px',
            transition: 'all 0.5s',
          }}
        />
        <ToggleBar
          style={{
            transform: toggleOpen ? 'rotate(45deg)' : 'rotate(0)',
            transformOrigin: '100% 50%',
          }}
        />
      </ToggleButton>
      <StyledNav toggleOpen={toggleOpen}>
        <NavUL toggleOpen={toggleOpen}>
          <NavLI toggleOpen={toggleOpen} onClick={changeToggle}>
            <StyledLink to="/#work">Work</StyledLink>
          </NavLI>
          <NavLI toggleOpen={toggleOpen} onClick={changeToggle}>
            <StyledLink to="/#projects">Projects</StyledLink>
          </NavLI>
          <NavLI toggleOpen={toggleOpen} onClick={changeToggle}>
            <StyledLink to="/blog">Blog</StyledLink>
          </NavLI>
          <NavLI toggleOpen={toggleOpen} onClick={changeToggle}>
            <StyledLink to="https://github.com/martin-stoyanov" target="_blank">
              Github
            </StyledLink>
          </NavLI>
        </NavUL>
      </StyledNav>
    </HeaderWrapper>
  );
};
