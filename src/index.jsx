import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { AppContainer } from 'react-hot-loader'
import App from './App'

let someMarkdownExample = `
[[youtube id=-IYdnXLdW_0]]

# Savjz [[ts 00:00:05]]
How he  is lucky enough to find the card he need!

\`\`\`js
let x = 2;
\`\`\`
meeek
\`\`\`swift
func xxx() {
  something();
}
\`\`\`
`

let render = (MainComponent) => {
  ReactDOM.render(
    <AppContainer>
      {MainComponent}
    </AppContainer>,
    document.getElementById('react-root')
  );
}

render(<App
  markdown={someMarkdownExample}
/>);

let xxx = ReactDOMServer.renderToString(<App
  markdown={someMarkdownExample}
/>);
console.log(xxx) // eslint-disable-line

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    let New = require('./App').default;

    render(<New
      markdown={someMarkdownExample}
    />);
  });
}
