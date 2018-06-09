import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { BaseStyles, AppContain } from './style/styles';

const renderApp = () => {
  BaseStyles();
  render(
    <AppContain>
      <App />
    </AppContain>,
    document.getElementById('app')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp();
  });
}
