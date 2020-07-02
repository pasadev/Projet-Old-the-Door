// == Import npm
import React from 'react';

// == Import : local
// Components
import Home from 'src/components/Home';
import Register from 'src/components/Register';

// == Import
import './styles.scss';

// == Components
const App = () => (
  <div className="app">
    <Register />
  </div>
);

// == Export
export default App;
