/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import './register.scss';
import FieldRegister from './FieldRegister/FieldRegister';
import ButtonRegister from './ButtonRegister';
import FieldRegisterPassword from './FieldRegister/FieldRegisterPassword';

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
  passwordConfirmation,
  handleSubmit,
}) => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   submitRegister();
  // };
  const firstPassword = password;
  const secondPassword = passwordConfirmation;
  return (
    <main className="register">
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
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
          <FieldRegisterPassword
            name="password"
            placeholder="password"
            onChange={changeField}
            value={password}
          />
        </label>
        <label htmlFor="form-password-confirmation">
          Confirmation du Mot de passe :
          <FieldRegisterPassword
            name="passwordConfirmation"
            placeholder="confirmation password"
            onChange={changeField}
            value={passwordConfirmation}
          />
        </label>
        {firstPassword === secondPassword && (
        <ButtonRegister />)}
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
  passwordConfirmation: PropTypes.string.isRequired,
  // submitRegister: PropTypes.func.isRequired,
  // updateField: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  // confirmedPassword: PropTypes.string.isRequired,
};

export default Register;
