/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';

// import { useField } from './hooks';

import Field from './Field';
import './connexion.scss';
import PasswordCo from './Field/passwordco';

const Connexion = ({
  email,
  password,
  changeField,
  handleLogin,
}) => {
  const emailField = email;
  const passwordField = password;
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
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
          <h2 className="blink">Connexion à O'ld the door</h2>
        </div>

        <Typist
          cursor={{ show: false }}
        >
          <Typist.Delay ms={5000} />
          <div className="infos">
            <p className="infos-text">Accès refusé : identification requise</p>
          </div>

        </Typist>
        <form autoComplete="off" onSubmit={handleSubmit}>

          <div className="login-input">
            <Typist
              cursor={{ show: false }}
            >
              <Typist.Delay ms={8000} />
              <label htmlFor="email"> Email : </label>
            </Typist>
            <Field
              name="email"
              placeholder=""
              onChange={changeField}
              value={email}
            />
          </div>
          <div className="login-input">
            <Typist
              cursor={{ show: false }}
            >
              <Typist.Delay ms={9000} />
              <label htmlFor="password"> Mot de passe : </label>

            </Typist>
            <PasswordCo
              name="password"
              placeholder=""
              onChange={changeField}
              value={password}
            />
          </div>

          {emailField && passwordField && (
          // if email field and password field are not empty, we will display the submit button.
          <div className="button-submit">
            <button type="submit">Sign In</button>
          </div>
          )}
        </form>
      </div>
    </div>
  );
};

Connexion.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

Connexion.defaultProps = {
};

export default Connexion;
