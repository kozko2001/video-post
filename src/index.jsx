import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import HelloWorld from './helloworld.jsx'

let render = (MainComponent) => {
  ReactDOM.render(
    <AppContainer>
      {MainComponent}
    </AppContainer>,
    document.getElementById('react-root')
  );
}

render(<HelloWorld />);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./helloworld.jsx', () => {
    const New = require('./helloworld.jsx').default;
    render(<New />);
  });
}
