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
}) => {
  const handleStoryCreateSubmit = (event) => {
    event.preventDefault();
    sumbitStoryCreate('sumbitStoryCreate');
  };

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
};
export default StoryCreate;
