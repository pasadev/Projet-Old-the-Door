import React from 'react';
import Field from 'src/components/Field';
import FieldArea from 'src/components/FieldArea';
import Proptypes from 'prop-types';

const AdventureEdit = ({
  title,
  synopsis,
  description,
  updateField,
  validationErrorAdvEdit,
}) => (
  <div className="adventureEdit">
    <Field
      className="adventureEdit-storyTitle"
      identifier="title"
      placeholder="titre"
      value={title}
      changeField={updateField}
      label="titre :"
    />
    <FieldArea
      className="adventureEdit-synopsis"
      identifier="synopsis"
      placeholder="synopsis"
      value={synopsis}
      changeField={updateField}
      label="synopsis :"
    />
    <FieldArea
      className="adventureEdit-description"
      identifier="description"
      placeholder="description"
      value={description}
      changeField={updateField}
      label="description :"
    />
    {validationErrorAdvEdit && (
      <div className="validationError">
        Les informations envoyées ne correspondent pas aux prérequis
      </div>
    )}
  </div>
);

AdventureEdit.propTypes = {
  validationErrorAdvEdit: Proptypes.bool.isRequired,
  updateField: Proptypes.func.isRequired,
  // Adventure data
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  synopsis: Proptypes.string.isRequired,
};

export default AdventureEdit;
