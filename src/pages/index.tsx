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
          width: '-webkit-fill-available',
        }}
      >
        <h2
          style={{
            display: 'grid',
            placeItems: 'center',
            minWidth: 'max-content',
            fontFamily: 'Roboto Mono, monospace',
            fontSize: '28px',
          }}
        >
          Work Experience: WIP
        </h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            height: 'fit-content',
            marginLeft: '5vw',
            marginRight: '5vw',
          }}
        >
          <CMSXCard />
          <CMSXCard />
        </div>
      </div>
    </Layout>
  );
}
