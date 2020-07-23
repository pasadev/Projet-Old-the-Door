/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import { Redirect, Link } from 'react-router-dom';
import Field from './Field';
import './connexion.scss';
import PasswordCo from './Field/passwordco';

const Connexion = ({
  email,
  password,
  changeField,
  handleLogin,
  redirect,
  loginError,
}) => {
  const emailField = email;
  const passwordField = password;
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  return (
    <>
      {redirect && <Redirect to="/profil" />}
      {!redirect && (
        <>
          <div className="login-form">
            <h1 className="adventures-title main-title">
              <Typist
                cursor={{ show: false }}
              >
                Connexion
              </Typist>
            </h1>
            <div className="form">
              <div className="login-header">
                <h2>Connexion à O'ld the door</h2>
              </div>
              {loginError && (
                <div className="infos-warning">
                  <p className="infos-text blink">Accès refusé : Informations de connexion erronées</p>
                </div>
              )}
              <form autoComplete="off" onSubmit={handleSubmit}>

                <div className="login-input">
                  <label htmlFor="email" className="login-email"> Email : </label>
                  <Field
                    name="email"
                    placeholder=""
                    onChange={changeField}
                    value={email}
                  />
                </div>
                <div className="login-input">
                  <label htmlFor="password" className="login-input-password"> Mot de passe : </label>
                  <PasswordCo
                    name="password"
                    placeholder=""
                    onChange={changeField}
                    value={password}
                  />
                </div>

                {emailField && passwordField && (
                // if email field and password field are not empty
                // we will display the submit button.
                  <button className="button-submit" type="submit">Sign In</button>
                )}
              </form>
            </div>
          </div>
          <div className="connexion-links">
            <Link
              className="link-home"
              to="/"
            >
              Retour à l'accueil
            </Link>
            <span className="inscription-text">Pas encore inscrit ?</span>
            <Link
              className="link-inscription"
              to="/inscription"
            >
              Inscription
            </Link>
          </div>
        </>
      )}
    </>
  );
};

Connexion.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  redirect: PropTypes.bool.isRequired,
  loginError: PropTypes.bool.isRequired,
};

Connexion.defaultProps = {
};

export default Connexion;
