import React, { Component, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Layout from '../../framework/layout';
// https://github.com/gaearon/react-hot-loader/issues/525
import Container from './container';
import { HomeProps } from '../../framework/type';

class App extends Component<HomeProps, any> {
  render() {
    return (
      <Layout {...this.props}>
        <Container {...this.props} />
      </Layout>
    );
  }
}

function bootstrap() {
  if (EASY_ENV_IS_NODE) {
    return App;
  }
  const state = window.__INITIAL_STATE__;
  const root = document.getElementById('app');
  if (EASY_ENV_IS_DEV) {
    ReactDOM.hydrate(
      <AppContainer>
        <Container {...state} />
      </AppContainer>,
      root
    );
    if (module.hot) {
      module.hot.accept();
    }
  }
  ReactDOM.hydrate(<Container {...state} />, root);
}

export default bootstrap();
