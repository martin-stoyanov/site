import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { TypingIntro } from '../components/Intro/typingIntro';
import { TextIntro } from '../components/Intro/textIntro';
import { CMSXCard } from '../components/Cards/Work/CMSX/CMSX';
import { BWCard } from '../components/Cards/Work/Bandwidth/BWCard';
import { S1Card } from '../components/Cards/Work/SentinelOne/S1Card';
import { ViewFinder } from '../components/Cards/Projects/ViewFinder/ViewfinderCard';
import { HyperparametersCard } from '../components/Cards/Projects/HyperparametersJS/HyperparametersCard';
import { WebsiteCard } from '../components/Cards/Projects/Website/Website';
import { CardHeader } from '../components/Cards/CardHeader';
import { CardsMain } from '../components/Cards/CardsMain';

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
      <span id="work">
        <div
          style={{
            padding: '2vh 0',
            background: 'rgba(179, 204, 255, 0.1)',
          }}
        >
          <CardHeader color="#b3ccff">Work Experience</CardHeader>
          <CardsMain>
            <CMSXCard />
            <BWCard />
            <S1Card />
          </CardsMain>
        </div>
      </span>
      <span id="projects">
        <div
          style={{
            marginTop: '2vh',
            padding: '2vh 0',
          }}
        >
          <CardHeader color="#deb1c0">Projects</CardHeader>
          <CardsMain>
            <ViewFinder />
            <HyperparametersCard />
            <WebsiteCard />
          </CardsMain>
        </div>
      </span>
    </Layout>
  );
}
