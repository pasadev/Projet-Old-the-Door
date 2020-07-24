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
              placeholder="xXDarkSasukeXx, Fabigeon, LeBGdu75 ..."
              onChange={changeField}
              value={nickname}
            />
            <label htmlFor="form-firstname">
              Prénom :
            </label>
            <FieldRegister
              name="firstname"
              placeholder="Nathan, Lara, Indiana, Daffy ..."
              onChange={changeField}
              value={firstname}
            />
            <label htmlFor="form-lastname">
              Nom :
              <FieldRegister
                name="lastname"
                placeholder="Drake, Croft, Jones, Duck ..."
                onChange={changeField}
                value={lastname}
              />
            </label>
            <label htmlFor="form-email">
              Email :
              <FieldRegister
                name="emailRegister"
                placeholder="monadressemail@gmail.com ..."
                onChange={changeField}
                value={emailRegister}
              />
            </label>
            <div className="input-password">
              <label htmlFor="form-password-confirmation">
                Mot de passe :
                <span className="form-password-rules">(taille minimum 8 caractere -> 1 majuscule, 1 chiffre, 1 caractere special)</span>
                <FieldRegisterPassword
                  name="passwordFirst"
                  placeholder="1234Azerty!"
                  onChange={changeField}
                  value={passwordFirst}
                />
              </label>
            </div>
            <div className="input-password">
              <label htmlFor="form-password-confirmation">
                Confirmation du Mot de passe :
                <FieldRegisterPassword
                  name="passwordSecond"
                  placeholder="1234Azerty!"
                  onChange={changeField}
                  value={passwordSecond}
                />
              </label>
            </div>
            {registerError && (
            <div className="infos-warning">
              Les données indiquées sont incorrectes
            </div>
            )}
            {firstPassword === secondPassword && (
            <ButtonRegister />)}
          </form>
          <div className="connexion-links">
            <Link
              className="link-home register-link-home"
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
