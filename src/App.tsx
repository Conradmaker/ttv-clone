import React from 'react';
import { createGlobalStyle } from 'styled-components';
import PageLayout from './components/Layout/PageLayout';
import Banner from './components/Main/Banner';
const Global = createGlobalStyle`
  html{
    background-color: #aaa;
    font-family: 'Roboto',sans-serif;
    color:#fff;
  }
  *{
    box-sizing: border-box;
  }
  body {
    background-image: linear-gradient(
      122deg,
      #fff 0.12%,
      #000 0,
      #000 50%,
      #fff 0,
      #fff 50.12%,
      #000 0,
      #000
    );
    background-size: 401px 641.73px;
  }
`;

function App(): JSX.Element {
  return (
    <>
      <Global />
      <PageLayout>
        <span>배너</span>
      </PageLayout>
    </>
  );
}

export default App;
