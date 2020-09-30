import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Header } from './header';

// current Font families: Roboto Mono, Montserrat, and Open Sans
const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(p) => p.theme.fontFamily};
    background: ${(p) => (p.theme.color === 'dark' ? '#282C35' : 'white')};
    color: ${(p) => (p.theme.color === 'dark' ? 'white' : '#282C35')};
    display: grid;
    place-items: center;
    margin: auto;
    overflow-x: hidden;
  }
`;
export default function Layout({ children }) {
  return (
    <ThemeProvider
      theme={{ fontFamily: 'Montserrat, sans-serif', color: 'dark' }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
        rel="stylesheet"
      />
      <GlobalStyle />
      <Header />
      {children}
    </ThemeProvider>
  );
}
