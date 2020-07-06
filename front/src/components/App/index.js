// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import : local
// Components
import Nav from 'src/components/Nav';
import Home from 'src/components/Home';
import Adventures from 'src/components/Adventures';
import Adventure from 'src/components/Adventure';
import Connexion from 'src/components/Connexion';

import Register from 'src/containers/Register';

import Team from 'src/components/Team';
import Game from 'src/components/Game';
import StoryCreate from 'src/components/StoryCreate';
import ChapterCreate from 'src/components/ChapterCreate';

// == Import
import './styles.scss';

// == Components
const App = () => (
  <div className="app">
    <Nav />
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
      <Route exact path="/aventures/test/jouer">
        <Game />
      </Route>
      <Route exact path="/aventures/test/edition">
        <ChapterCreate />
      </Route>
      <Route exact path="/aventures/test">
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
        <div>
          404
        </div>
      </Route>
    </Switch>
  </div>
);
// TODO change 'test' with ':slug' in path="adventures/

// == Export
export default App;
