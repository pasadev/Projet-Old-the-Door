/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import './register.scss';
import FieldRegister from './FieldRegister/FieldRegister';

const Register = ({
  email,
  password,
  // confirmedPassword,
  firstname,
  lastname,
  nickname,
  // submitRegister,
  // updateField,
  changeField,
}) => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   submitRegister();
  // };
  return (
    <main className="register">
      <form className="form">
        <label htmlFor="form-nickname">
          Pseudo :
        </label>
        <FieldRegister
          name="nickname"
          placeholder="Pseudo"
          onChange={changeField}
          value={nickname}
        />
        <label htmlFor="form-firstname">
          Prénom :
        </label>
        <FieldRegister
          name="firstname"
          placeholder="Prénom"
          onChange={changeField}
          value={firstname}
        />
        <label htmlFor="form-lastname">
          Nom :
          <FieldRegister
            name="lastname"
            placeholder="Nom"
            onChange={changeField}
            value={lastname}
          />
        </label>
        <label htmlFor="form-email">
          Email :
          <FieldRegister
            name="email"
            placeholder="adresse-email"
            onChange={changeField}
            value={email}
          />
        </label>
        <label htmlFor="form-password">
          Mot de passe :
          <FieldRegister
            name="password"
            placeholder="password"
            onChange={changeField}
            value={password}
          />
        </label>
        <label htmlFor="form-password-confirmation">
          Confirmation du Mot de passe :
          <FieldRegister
            name="password"
            placeholder="confirmation password"
            onChange={changeField}
            value={password}
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
};
Register.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  // submitRegister: PropTypes.func.isRequired,
  // updateField: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  // confirmedPassword: PropTypes.string.isRequired,
};

export default Register;
