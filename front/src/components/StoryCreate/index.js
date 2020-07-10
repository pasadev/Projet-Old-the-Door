import React from 'react';
import Proptypes from 'prop-types';
import Field from 'src/components/Field';

const StoryCreate = ({
  title,
  synopsis,
  description,
  updateField,
  sumbitStoryCreate,
}) => {
  const handleStoryCreateSubmit = (event) => {
    event.preventDefault();
    sumbitStoryCreate();
  };

  return (
    <main className="storyCreate">
      <form
        className="storyCreate-form"
        onSubmit={handleStoryCreateSubmit}
      >
        <Field
          name="title"
          placeholder="titre"
          value={title}
          changeField={updateField}
          label="title"
        />
        <Field
          name="synopsis"
          placeholder="synopsis"
          value={synopsis}
          changeField={updateField}
          label="synopsis"
        />
        <Field
          name="description"
          placeholder="description"
          value={description}
          changeField={updateField}
          label="description"
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
