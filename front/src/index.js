// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// == Import : local
// Components
import App from 'src/components/App';

// == Render
const rootReactElement = (
  <Router>
    <App />
  </Router>
);

const target = document.getElementById('root');

render(rootReactElement, target);
