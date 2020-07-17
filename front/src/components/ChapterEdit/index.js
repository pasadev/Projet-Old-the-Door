import React from 'react';
import Field from 'src/components/Field';
import FieldArea from 'src/components/FieldArea';
import PropTypes from 'prop-types';

const ChapterEdit = ({
  id,
  title,
  content,
  keyword,
  lockword,
  unlockText,
  updateField,
  editOption,
  submitNewChapterForm,
  submitChapterEditForm,
}) => {
  const handleChapterEditSubmit = (event) => {
    event.preventDefault();
    submitChapterEditForm();
  };

  const handleNewChapterSubmit = (event) => {
    event.preventDefault();
    submitNewChapterForm();
  };

  return (
    <>
      {editOption === id && (
        <form
          className="newChapter-form"
          onSubmit={handleChapterEditSubmit}
        >
          <div className="chapterEdit">
            <label htmlFor="chapterEdit-parentChapter">
              Choisir le Chapitre parent :
              <select className="chapterEdit-parentChapter" id="chapterEdit-parentChapter">
                {/* TODO map */}
                <option value="">
                  Chapitre parent à choisir
                </option>
              </select>
            </label>
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
          <button type="submit">Enregistrer les modifications du chapitre</button>
        </form>
      )}
      {editOption === 'Nouveau Chapitre' && (
        <form
          className="newChapter-form"
          onSubmit={handleNewChapterSubmit}
        >
          <div className="chapterEdit">
            <label htmlFor="chapterEdit-parentChapter">
              Choisir le Chapitre parent :
              <select className="chapterEdit-parentChapter" id="chapterEdit-parentChapter">
                {/* TODO map */}
                <option value="">
                  Chapitre parent à choisir
                </option>
              </select>
            </label>
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
          <button type="submit">Enregistrer le nouveau chapitre</button>
        </form>
      )}
    </>
  );
};

ChapterEdit.propTypes = {
  editOption: PropTypes.string.isRequired,
  updateField: PropTypes.func.isRequired,
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  keyword: PropTypes.string,
  lockword: PropTypes.string,
  unlockText: PropTypes.string,
  submitNewChapterForm: PropTypes.func.isRequired,
  submitChapterEditForm: PropTypes.func.isRequired,
};

ChapterEdit.defaultProps = {
  id: '',
  title: '',
  content: '',
  keyword: '',
  lockword: '',
  unlockText: '',
};

export default ChapterEdit;
