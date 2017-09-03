import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'

let render = (MainComponent) => {
  ReactDOM.render(
    <AppContainer>
      {MainComponent}
    </AppContainer>,
    document.getElementById('react-root')
  );
}

render(<App />);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    const New = require('./App').default;
    render(<New />);
  });
}
