/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import './register.scss';
// import FieldRegister from './FieldRegister/FieldRegister';
import ButtonRegister from './ButtonRegister';
// import FieldRegisterPassword from './FieldRegister/FieldRegisterPassword';
import Field from 'src/components/Field'

const Register = ({
  emailRegister,
  // confirmedPassword,
  firstname,
  lastname,
  nickname,
  // submitRegister,
  // updateField,
  changeField,
  first,
  second,
  handleRegister,
}) => {
  const firstPassword = first;
  const secondPassword = second;
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister();
  };
  return (
    <main className="register">
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="nickname">
          Pseudo :
        </label>
        <Field
          name="nickname"
          placeholder="Pseudo"
          onChange={changeField}
          value={nickname}
        />
        <label htmlFor="firstname">
          Prénom :
        </label>
        <Field
          name="firstname"
          placeholder="Prénom"
          onChange={changeField}
          value={firstname}
        />
        <label htmlFor="lastname">
          Nom :
          <Field
            name="lastname"
            placeholder="Nom"
            onChange={changeField}
            value={lastname}
          />
        </label>
        <label htmlFor="email">
          Email :
          <Field
            name="emailRegister"
            placeholder="email"
            onChange={changeField}
            value={emailRegister}
          />
        </label>
        <label htmlFor="password-first">
          Mot de passe :
          <Field
            name="first"
            placeholder="password"
            onChange={changeField}
            value={first}
            type= "password"
          />
        </label>
        <label htmlFor="password-second">
          Confirmation du Mot de passe :
          <Field
            name="second"
            placeholder="confirmation password"
            onChange={changeField}
            value={second}
            type= "password"
          />
        </label>
        {firstPassword === secondPassword && (
        <ButtonRegister />)}
      </form>
    </main>
  );
};
Register.propTypes = {
  emailRegister: PropTypes.string.isRequired,
  first: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  // submitRegister: PropTypes.func.isRequired,
  // updateField: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  // confirmedPassword: PropTypes.string.isRequired,
  handleRegister: PropTypes.func.isRequired,
};

export default Register;
