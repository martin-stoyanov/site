import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { TypingIntro } from '../components/Intro/typingIntro';
import { TextIntro } from '../components/Intro/textIntro';
import { CMSXCard } from '../components/Card/Cards/CMSX';

export default function UsersList() {
  return (
    <Layout>
      <TypingIntro />
      <TextIntro />
      <div
        style={{
          position: 'absolute',
          top: 0,
          marginTop: '105vh',
          left: '10vw',
        }}
      >
        <h2
          style={{
            display: 'grid',
            placeItems: 'center',
            minWidth: 'max-content',
          }}
        >
          <p
            style={{
              fontFamily: 'Roboto Mono, monospace',
              fontSize: '28px',
            }}
          >
            projects: WIP
          </p>
        </h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            width: '100vw',
            height: 'fit-content',
            maxWidth: '80vw',
          }}
        >
          <CMSXCard />
        </div>
      </div>
    </Layout>
  );
}
