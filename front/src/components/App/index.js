// == Import npm
import React from 'react';

// == Import : local
// Components
import Home from 'src/components/Home';
import Connexion from'src/components/Connexion';

// == Import
import './styles.scss';

// == Components
const App = () => (
  <div className="app">
    <Home />
    <Connexion />
  </div>
);

// == Export
export default App;
