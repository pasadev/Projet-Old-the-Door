import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';
import FieldArea from 'src/components/FieldArea';
import Typist from 'react-typist';
import './storyCreate.scss';

const StoryCreate = ({
  title,
  synopsis,
  description,
  updateField,
  sumbitStoryCreate,
  redirect,
  slug,
  clearStoryCreation,
  validationError,
  setValidationErrorAdvTrue,
}) => {
  useEffect(() => {
    clearStoryCreation();
  }, []);

  const handleStoryCreateSubmit = (event) => {
    event.preventDefault();
    if ((title.length > 3) && (synopsis.length > 50) && (description.length > 50)) {
      sumbitStoryCreate(title, synopsis, description);
    }
    else {
      setValidationErrorAdvTrue();
    }
  };

  return (
    <>
      {redirect && <Redirect to={`/aventures/${slug}`} />}
      {!redirect && (
        <main className="storyCreate">
          <h1 className="adventures-title main-title">
            <Typist
              cursor={{ hideWhenDone: true }}
            >
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
            />
            <FieldArea
              identifier="synopsis"
              placeholder="synopsis"
              value={synopsis}
              changeField={updateField}
              label="synopsis : (50 charactères minimum)"
            />
            <FieldArea
              identifier="description"
              placeholder="description"
              value={description}
              changeField={updateField}
              label="description : (50 charactères minimum)"
            />
            {validationError && (
              <div className="validationError">
                Les informations envoyées ne correspondent pas aux prérequis
              </div>
            )}
            <button
              className="storyCreate-form-button"
              type="submit"
            >
              C'est parti !
            </button>
          </form>
        </main>
      )}
    </>
  );
};

StoryCreate.propTypes = {
  setValidationErrorAdvTrue: PropTypes.func.isRequired,
  validationError: PropTypes.bool.isRequired,
  clearStoryCreation: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sumbitStoryCreate: PropTypes.func.isRequired,
  updateField: PropTypes.func.isRequired,
  redirect: PropTypes.bool.isRequired,
};
export default StoryCreate;
