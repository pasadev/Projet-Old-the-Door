// == Import npm
import React from 'react';

// == Import : local
// Components
import Home from 'src/components/Home';
import Connexion from'src/components/Connexion';

// import Register from 'src/components/Register';
// import Adventures from 'src/components/Adventures';
import Team from 'src/components/Team';
// import Footer from 'src/components/Footer';

// == Import
import './styles.scss';

// == Components
const App = () => (
  <div className="Gaming">
    <div className="app">
      <Home />
      <Team />
    </div>
  </div>
);

// == Export
export default App;
