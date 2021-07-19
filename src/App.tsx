import { Route, Switch } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import PageLayout from './components/Layout/PageLayout';
import Banner from './components/Main/Banner';
import Ttv from './components/Main/Ttv';
import { Global } from './utils/globalStyle';

function App(): JSX.Element {
  return (
    <>
      <Global />
      <PageLayout>
        <Route
          render={({ location }) => (
            <SwitchTransition>
              <CSSTransition timeout={250} classNames="switch" key={location.key}>
                <Switch location={location}>
                  <Route exact component={Banner} path="/" />
                  <Route exact component={Ttv} path="/getting-started" />
                </Switch>
              </CSSTransition>
            </SwitchTransition>
          )}
        />
      </PageLayout>
    </>
  );
}

export default App;
