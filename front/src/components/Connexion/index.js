/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';

// import { useField } from './hooks';

import Field from 'src/components/Field';
import './connexion.scss';

const Connexion = ({
  email,
  password,
  changeField,
  handleLogin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">

      <h1 className="adventures-title main-title">
        <Typist>
          Connexion
        </Typist>
      </h1>

      <form autoComplete="off" onSubmit={handleSubmit}>

        <label htmlFor="email"> Email</label>
        <Field
          name="email"
          placeholder="Adresse Email"
          onChange={changeField}
          value={email}
        />

        <label htmlFor="password"> Mot de passe</label>
        <Field
          name="password"
          placeholder="Mot de Passe"
          onChange={changeField}
          value={password}
        />

        <button type="submit">Sign In</button>
      </form>
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
