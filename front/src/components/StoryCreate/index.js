import React from 'react';
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
}) => {
  const handleStoryCreateSubmit = (event) => {
    event.preventDefault();
    sumbitStoryCreate(title, synopsis, description);
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
              label="synopsis :"
            />
            <FieldArea
              identifier="description"
              placeholder="description"
              value={description}
              changeField={updateField}
              label="description :"
            />
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
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sumbitStoryCreate: PropTypes.func.isRequired,
  updateField: PropTypes.func.isRequired,
  redirect: PropTypes.bool.isRequired,
};
export default StoryCreate;
