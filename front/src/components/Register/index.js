import React from 'react';

import './register.scss';

const Register = () => (
  <main className="register">
    <form className="form">
      <label htmlFor="form-nickname">
        Pseudo :
        <input
          className="form-nickname"
          id="form-nickname"
          type="text"
          placeholder="xXDarkSasukeXx, Fabigeon, LeBGdu75 ..."
        />
      </label>
      <label htmlFor="form-firstname">
        Prénom :
        <input
          className="form-firstname"
          id="form-firstname"
          type="text"
          placeholder="Nathan, Lara, Indiana, Daffy ..."
        />
      </label>
      <label htmlFor="form-lastname">
        Nom :
        <input
          className="form-lastname"
          id="form-lastname"
          type="text"
          placeholder="Drake, Croft, Jones, Duck ..."
        />
      </label>
      <label htmlFor="form-email">
        Email :
        <input
          className="form-email"
          id="form-email"
          type="email"
          placeholder="monadressemail@gmail.com ..."
        />
      </label>
      <label htmlFor="form-password">
        Mot de passe :
        <input
          className="form-password"
          id="form-password"
          type="text"
          placeholder="1234azerty"
        />
      </label>
      <label htmlFor="form-password-confirmation">
        Confirmation du Mot de passe :
        <input
          className="form-password-confirmation"
          id="form-password-confirmation"
          type="password"
          placeholder="1234azerty"
        />
      </label>
      <button
        className="form-firstname"
        type="submit"
      >
        Envoyer
      </button>
    </form>
  </main>
);

export default Register;
