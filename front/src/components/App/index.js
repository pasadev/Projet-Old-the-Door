// == Import npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
import Aside from 'src/containers/Aside';

import { asideData } from 'src/utils';

// == Import
import './styles.scss';

// == Components
const App = ({ burgerMenuOpen, isLogged }) => (
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
          <Aside data={asideData.storyCreate} />
          {isLogged !== true && (<Redirect to="/connexion" />)}
          {isLogged === true && (<StoryCreate />)}
        </Route>
        <Route exact path="/aventures/:slug/jouer">
          <Aside data={asideData.gameScreen} />
          {isLogged !== true && (<Redirect to="/connexion" />)}
          {isLogged === true && (<GameScreen />)}
        </Route>
        <Route exact path="/aventures/:slug/edition">
          <Aside data={asideData.storyEdit} />
          {isLogged !== true && (<Redirect to="/connexion" />)}
          {isLogged === true && (<StoryEdit />)}
        </Route>
        <Route exact path="/aventures/:slug">
          {isLogged !== true && (<Redirect to="/connexion" />)}
          {isLogged === true && (<Adventure />)}
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
  isLogged: PropTypes.bool,
};

App.defaultProps = {
  isLogged: null,
};

// == Export
export default App;
