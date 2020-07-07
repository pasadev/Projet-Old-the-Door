// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
// Components
import Home from 'src/containers/Home';
import Adventures from 'src/containers/Adventures';
import Adventure from 'src/containers/Adventure';
import Connexion from 'src/components/Connexion';
import Register from 'src/components/Register';
import Team from 'src/components/Team';
import Game from 'src/components/Game';
import StoryCreate from 'src/components/StoryCreate';
import ChapterCreate from 'src/components/ChapterCreate';
import Header from 'src/components/Header';
import Nav from 'src/containers/Nav';
import PageError404 from 'src/components/PageError404';
import Loader from 'src/components/Loader';

// == Import
import './styles.scss';

// == Components
const App = ({ burgerMenuOpen, loading }) => (
  <div className="app">
    <Header />
    {loading && <Loader />}
    {!loading && (
      <>
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
            <Route exact path="/aventures/:slug/jouer">
              <Game />
            </Route>
            <Route exact path="/aventures/:slug/edition">
              <ChapterCreate />
            </Route>
            <Route exact path="/aventures/:slug">
              <Adventure />
            </Route>
            <Route exact path="/aventures/creation">
              <StoryCreate />
            </Route>
            <Route exact path="/aventures">
              <Adventures />
            </Route>
            <Route exact path="/equipe">
              <Team />
            </Route>
            <Route>
              <PageError404 />
            </Route>
          </Switch>
        )}
      </>
    )}
  </div>
);

// TODO change 'test' with ':slug' in path="adventures/
App.propTypes = {
  burgerMenuOpen: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

// == Export
export default App;
