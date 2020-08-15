import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { TypingIntro } from '../components/Intro/typingIntro';
import { TextIntro } from '../components/Intro/textIntro';

export default function UsersList() {
  return (
    <Layout>
      <TypingIntro />
      <TextIntro />
      <div
        style={{
          // width: '80vw',
          position: 'absolute',
          top: 0,
          marginTop: '100vh',
          border: '2px solid #4f4763',
          fontFamily: 'Roboto Mono, monospace',
        }}
      >
        <div style={{ padding: '10px', fontSize: '18px' }}>
          Projects Section: WIP
        </div>
      </div>
    </Layout>
  );
}
