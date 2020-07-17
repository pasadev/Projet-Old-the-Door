// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
// Components

import Home from 'src/containers/Home';
import Adventures from 'src/containers/Adventures';
import Adventure from 'src/containers/Adventure';
import Register from 'src/containers/Register';
import Connexion from 'src/containers/Connexion';
import Team from 'src/components/Team';
import GameScreen from 'src/containers/GameScreen';
import StoryCreate from 'src/containers/StoryCreate';
import StoryEdit from 'src/containers/StoryEdit';
import Header from 'src/containers/Header';
import Nav from 'src/containers/Nav';
import PageError404 from 'src/components/PageError404';
import Footer from 'src/containers/Footer';
import Profil from 'src/containers/Profil';

// == Import
import './styles.scss';

// == Components
const App = ({ burgerMenuOpen }) => (
  <div className="app">
    <Header />
    {burgerMenuOpen && <Nav />}
    {!burgerMenuOpen && (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/connexion">
          <Connexion />
        </Route>
        <Route exact path="/inscription">
          <Register />
        </Route>
        <Route exact path="/aventures/creation">
          <StoryCreate />
        </Route>
        <Route exact path="/aventures/:slug/jouer">
          <GameScreen />
        </Route>
        <Route exact path="/aventures/:slug/edition">
          <StoryEdit />
        </Route>
        <Route exact path="/aventures/:slug">
          <Adventure />
        </Route>
        <Route exact path="/aventures">
          <Adventures />
        </Route>
        <Route exact path="/equipe">
          <Team />
        </Route>
        <Route exact path="/profil">
          <Profil />
        </Route>
        <Route>
          <PageError404 />
        </Route>
      </Switch>
    )}
    <Footer />
  </div>
);

App.propTypes = {
  burgerMenuOpen: PropTypes.bool.isRequired,
};

// == Export
export default App;
