import React from 'react';
import Proptypes from 'prop-types';
import StoryCreationInput from './storyCreateInput';

const StoryCreate = ({
  title,
  synopsis,
  description,
  changeField,
}) => (

  <main>
    <form action="submit" name="storyCreate">
      <StoryCreationInput
        name="title"
        placeholder="titre"
        onChange={changeField}
        value={title}
      />
      <StoryCreationInput
        name="synopsis"
        placeholder="synopsis"
        onChange={changeField}
        value={synopsis}
      />
      <StoryCreationInput
        name="description"
        placeholder="description"
        onChange={changeField}
        value={description}
      />
    </form>
  </main>

);

StoryCreate.propTypes = {
  title: Proptypes.string.isRequired,
  synopsis: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  changeField: Proptypes.func.isRequired,
};
export default StoryCreate;
