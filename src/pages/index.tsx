import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { TypingIntro } from '../components/Intro/typingIntro';
import { TextIntro } from '../components/Intro/textIntro';
import { CMSXCard } from '../components/Cards/Work/CMSX/CMSX';
import { BWCard } from '../components/Cards/Work/Bandwidth/BWCard';
import { ViewFinder } from '../components/Cards/Projects/ViewFinder/ViewfinderCard';
import { HyperparametersCard } from '../components/Cards/Projects/HyperparametersJS/HyperparametersCard';
import { CardHeader } from '../components/Cards/CardHeader';
import { CardWrapper } from '../components/Cards/CardWrapper';

export default function UsersList() {
  return (
    <Layout>
      <div
        style={{
          minHeight: '74vh',
          background: '#282C35',
        }}
      >
        <TypingIntro />
        <TextIntro />
      </div>
      <a id="work">
        <div
          style={{
            padding: '2vh 0',
            background: '#3D4D54',
          }}
        >
          <CardHeader>Work Experience</CardHeader>
          <CardWrapper>
            <CMSXCard />
            <BWCard />
          </CardWrapper>
        </div>
      </a>
      <a id="projects">
        <div
          style={{
            padding: '2vh 0',
            background: '#282C35',
          }}
        >
          <CardHeader>Projects</CardHeader>
          <CardWrapper>
            <ViewFinder />
            <HyperparametersCard />
          </CardWrapper>
        </div>
      </a>
    </Layout>
  );
}
