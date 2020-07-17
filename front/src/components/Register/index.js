/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import Typist from 'react-typist';
import './register.scss';
import FieldRegister from './FieldRegister/FieldRegister';
import ButtonRegister from './ButtonRegister';
import FieldRegisterPassword from './FieldRegister/FieldRegisterPassword';

const Register = ({
  emailRegister,
  // confirmedPassword,
  firstname,
  lastname,
  nickname,
  // submitRegister,
  // updateField,
  passwordFirst,
  passwordSecond,
  changeField,
  handleRegister,
  registerError,
  redirect,
}) => {
  const firstPassword = passwordFirst;
  const secondPassword = passwordSecond;
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister();
  };
  return (
    <>
      {redirect && <Redirect to="/profil" />}
      {!redirect && (
      <>
        <main className="register">
          <h1 className="adventure-title main-title">
            <Typist
              cursor={{ hideWhenDone: true }}
            >
              Inscription
            </Typist>
          </h1>
          <form
            className="form"
            onSubmit={handleSubmit}
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
                name="emailRegister"
                placeholder="email"
                onChange={changeField}
                value={emailRegister}
              />
            </label>
            <label htmlFor="form-password-confirmation">
              Mot de passe :
              <FieldRegisterPassword
                name="passwordFirst"
                placeholder="password"
                onChange={changeField}
                value={passwordFirst}
              />
            </label>
            <label htmlFor="form-password-confirmation">
              Confirmation du Mot de passe :
              <FieldRegisterPassword
                name="passwordSecond"
                placeholder="confirmation password"
                onChange={changeField}
                value={passwordSecond}
              />
            </label>
            {firstPassword === secondPassword && (
            <ButtonRegister />)}
          </form>
          {registerError && (
            <div className="infos-warning">
              Les données indiquées sont incorrectes
            </div>
          )}
          <div className="connexion-links">
            <Link
              className="link-home"
              to="/"
            >
              Retour à l'accueil
            </Link>
          </div>
        </main>
      </>
      )}
    </>
  );
};
Register.propTypes = {
  emailRegister: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  passwordFirst: PropTypes.string.isRequired,
  passwordSecond: PropTypes.string.isRequired,
  // submitRegister: PropTypes.func.isRequired,
  // updateField: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  // confirmedPassword: PropTypes.string.isRequired,
  handleRegister: PropTypes.func.isRequired,
  registerError: PropTypes.bool.isRequired,
  redirect: PropTypes.bool.isRequired,
};

export default Register;
