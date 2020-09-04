import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { TypingIntro } from '../components/Intro/typingIntro';
import { TextIntro } from '../components/Intro/textIntro';
import { CMSXCard } from '../components/Cards/Random/JajaBday/CMSX';
import { BWCard } from '../components/Cards/Work/Bandwidth/BWCard';
import { CardHeader } from '../components/Cards/CardHeader';
import { CardWrapper } from '../components/Cards/CardWrapper';

export default function UsersList() {
  return (
    <body
      style={{
        background: 'white',
        // background: '-webkit-linear-gradient(#3D4D54, #414064)',
        margin: '0',
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <div
        style={{
          paddingTop: '5vh',
          // background: '-webkit-linear-gradient(#3D4D54, #414064)',
        }}
      >
        <CardHeader>Happy Birthday</CardHeader>
        <CardHeader>Jaja!</CardHeader>
        <CardHeader>
          <p style={{ textAlign: 'center', fontSize: '0.8em' }}>
            You have a free coupon! View it below:
          </p>
        </CardHeader>
        <CardWrapper>
          <CMSXCard />
        </CardWrapper>
      </div>
    </body>
  );
}
