import React from 'react';
import Proptypes from 'prop-types';
import Field from 'src/components/Field';
import Typist from 'react-typist';
import './storyCreate.scss';

const StoryCreate = ({
  title,
  synopsis,
  description,
  updateField,
  sumbitStoryCreate,
  // changeField,
}) => {
  const handleStoryCreateSubmit = (event) => {
    event.preventDefault();
    sumbitStoryCreate('sumbitStoryCreate');
  };

  // const handleChange = (event) => {
  //   const { value: inputValue, name } = event.target;
  //   changeField(name, inputValue);
  // };

  return (
    <main className="storyCreate">
      <h1 className="adventures-title main-title">
        <Typist>
          Créer une aventure
        </Typist>
      </h1>
      <form
        className="storyCreate-form"
        onSubmit={handleStoryCreateSubmit}
      >
        <Field
          identifier="title"
          placeholder="titre"
          value={title}
          changeField={updateField}
          label="titre :"
          maxLength="128"
        />
        <Field
          identifier="synopsis"
          placeholder="synopsis"
          value={synopsis}
          changeField={updateField}
          label="synopsis :"
          maxLength="524288"
        />
        <Field
          identifier="description"
          placeholder="description"
          value={description}
          changeField={updateField}
          label="description :"
          maxLength="524288"
        />

        {/* <label htmlFor="description">
          Description
          <textarea
            identifier="description"
            value={description}
            onChange={handleChange}
            placeholder="description"
            name="description"
            id="description"
            cols="30"
            rows="10"
            type="text"
          />
        </label> */}
        <button
          className="storyCreate-form-button"
          type="submit"
        >
          C'est parti !
        </button>
      </form>
    </main>
  );
};

StoryCreate.propTypes = {
  title: Proptypes.string.isRequired,
  synopsis: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  sumbitStoryCreate: Proptypes.func.isRequired,
  updateField: Proptypes.func.isRequired,
  // changeField: Proptypes.func.isRequired,
};
export default StoryCreate;
