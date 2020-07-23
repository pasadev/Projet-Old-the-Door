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
    if ((title.length > 3 && !(/^\d+$/.test(title))) && (synopsis.length > 50) && (description.length > 50)) {
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
              placeholder="L'énigme mystérieuse ..."
              value={title}
              changeField={updateField}
              label="Titre :"
            />
            <FieldArea
              identifier="synopsis"
              placeholder="Il était une fois, dans une contrée lointaine ..."
              value={synopsis}
              changeField={updateField}
              label="Synopsis : (50 caractères min.)"
            />
            <FieldArea
              identifier="description"
              placeholder="L'histoire commence dans une grange abandonnée ..."
              value={description}
              changeField={updateField}
              label="Description : (50 caractères min.)"
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
