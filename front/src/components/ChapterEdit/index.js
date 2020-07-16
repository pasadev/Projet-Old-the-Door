import React from 'react';
import Field from 'src/components/Field';
import FieldArea from 'src/components/FieldArea';
import PropTypes from 'prop-types';

const ChapterEdit = ({
  title,
  content,
  keyword,
  lockword,
  unlockText,
  updateField,
  editOption,
}) => (
  <>
    {editOption === title && (
      <div className="chapterEdit">
        <select className="chapterEdit-parentChapter" id="">
          {/* TODO map */}
          <option value="">
            Chapitre parent à choisir
          </option>
        </select>
        <Field
          className="chapterEdit-chapterTitle"
          identifier="title"
          placeholder="titre"
          value={title}
          changeField={updateField}
          label="titre :"
        />
        <FieldArea
          className="chapter-Edit-chapterText"
          identifier="content"
          placeholder="Contenu"
          value={content}
          changeField={updateField}
          label="Contenu :"
        />
        <Field
          className="chapterEdit-key"
          identifier="keyword"
          placeholder="Clé"
          value={keyword}
          changeField={updateField}
          label="Clé :"
        />
        <Field
          className="chapterEdit-lock"
          identifier="lockword"
          placeholder="Serrure"
          value={lockword}
          changeField={updateField}
          label="Serrure :"
        />
        <Field
          className="chapterEdit-unlockText"
          identifier="unlockText"
          placeholder="Texte de réussite du chapitre"
          value={unlockText}
          changeField={updateField}
          label="Texte de réussite du chapitre :"
        />
      </div>
    )}
  </>
);

ChapterEdit.propTypes = {
  editOption: PropTypes.string.isRequired,
  updateField: PropTypes.func.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  keyword: PropTypes.string,
  lockword: PropTypes.string,
  unlockText: PropTypes.string,
};

ChapterEdit.defaultProps = {
  title: '',
  content: '',
  keyword: '',
  lockword: '',
  unlockText: '',
};

export default ChapterEdit;
