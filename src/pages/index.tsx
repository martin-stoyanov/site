import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { TypingIntro } from '../components/typingIntro';

export default function UsersList() {
  return (
    <Layout>
      <TypingIntro />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100vw',
          marginTop: '5vh',
          height: 'auto',
        }}
      >
        <div
          style={{
            width: '80vw',
            height: '100%',
            border: '2px solid #4f4763',
            fontFamily: 'Roboto Mono, monospace',
          }}
        >
          <div style={{ padding: '10px', fontSize: '18px' }}>
            I'm a software developer interested in Javascript, React, and UX.
            I'm currently a senior at Cornell University.
          </div>
        </div>
      </div>
    </Layout>
  );
}
