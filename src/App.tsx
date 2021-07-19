import { Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import PageLayout from './components/Layout/PageLayout';
import Banner from './components/Main/Banner';
import Ttv from './components/Main/Ttv';

const Global = createGlobalStyle`
  html{
    background-color: #aaa;
    font-family: 'Roboto',sans-serif;
    color:#fff;
  }
  *{
    box-sizing: border-box;
  }
  a{
    text-decoration:none;
    color:#fff;
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
        <Route exact component={Banner} path="/" />
        <Route exact component={Ttv} path="/getting-started" />
      </PageLayout>
    </>
  );
}

export default App;
