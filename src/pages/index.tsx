import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { TypingIntro } from '../components/Intro/typingIntro';
import { TextIntro } from '../components/Intro/textIntro';
import { CMSXCard } from '../components/Cards/Work/CMSX/CMSX';
import { BWCard } from '../components/Cards/Work/Bandwidth/BWCard';
import { CardHeader } from '../components/Cards/CardHeader';
import { CardWrapper } from '../components/Cards/CardWrapper';

export default function UsersList() {
  return (
    <Layout>
      <div
        style={{
          minHeight: '74vh',
          background: '-webkit-linear-gradient(#282C35, #313A42)',
        }}
      >
        <TypingIntro />
        <TextIntro />
      </div>
      <div
        style={{
          paddingTop: '5vh',
          background: '-webkit-linear-gradient(#3D4D54, #414064)',
        }}
      >
        <CardHeader>Work Experience</CardHeader>
        <CardWrapper>
          <CMSXCard />
          <BWCard />
        </CardWrapper>
      </div>
    </Layout>
  );
}
