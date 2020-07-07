/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

// import { useField } from './hooks';

import Field from './Field';

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
// J'ai utilisé le Field vu en cours pour faire les input vu que ça marchait
  return (
    <div className="login-form">

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

// changeField correspond a la fonction dans le container
// handleLogin aussi

Connexion.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired, 
  handleLogin: PropTypes.func.isRequired,
};

Connexion.defaultProps = {
};

export default Connexion;
