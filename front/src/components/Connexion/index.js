import React from 'react';
import PropTypes from 'prop-types';

// import { useField } from './hooks';

import './connexion.scss';

const Connexion = ({
  email,
  password,
  // changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input type="text" id="connexion-email" name="connexion-email" value={email} />
          <input type="text" id="connexion-password" name="connexion-password" value={password} />
          <button type="submit">Sign In</button>
        </form>
      )}
    </div>
  );
};

Connexion.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  // changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

Connexion.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default Connexion;
