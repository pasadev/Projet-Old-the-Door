/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

// import { useField } from './hooks';

import './connexion.scss';

const Connexion = ({
  email,
  password,
  // changeField,
  handleLogin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">

      <form autoComplete="off" onSubmit={handleSubmit}>

        <label htmlFor="connexion-email"> Email</label>
        <input type="text" id="connexion-email" name="connexion-email" value={email} />
        <label htmlFor="connexion-password"> Mot de passe</label>
        <input type="text" id="connexion-password" name="connexion-password" value={password} />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

Connexion.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  // changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

Connexion.defaultProps = {
};

export default Connexion;
