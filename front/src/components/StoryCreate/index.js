import React from 'react';
import { Redirect } from 'react-router-dom';
import { slugifyTitle } from 'src/utils';
import Proptypes from 'prop-types';
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
}) => {
  const handleStoryCreateSubmit = (event) => {
    event.preventDefault();
    sumbitStoryCreate(title, synopsis, description);
  };
  // TODO put redirect to false after redirect is complet in useEffect adv/:slug
  return (
    <>
      {redirect && <Redirect to={`/aventures/${slugifyTitle(title)}`} />}
      {!redirect && (
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
  title: Proptypes.string.isRequired,
  synopsis: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  sumbitStoryCreate: Proptypes.func.isRequired,
  updateField: Proptypes.func.isRequired,
  redirect: Proptypes.bool.isRequired,
};
export default StoryCreate;
