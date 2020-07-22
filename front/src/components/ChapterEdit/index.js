/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import Field from 'src/components/Field';
import FieldArea from 'src/components/FieldArea';
import PropTypes from 'prop-types';

import './chapterEdit.scss';

const ChapterEdit = ({
  chapterEdit,
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
  parentChapterOption,
  setParentChapterChoice,
  setErrorKeyLockTrue,
  errorKeyLock,
}) => {
  const handleChapterEditSubmit = (event) => {
    event.preventDefault();
    // Check if keyword and lockword are in the content
    if ((content.includes(keyword)) && (content.includes(lockword))) {
      submitChapterEditForm();
    }
    else {
      setErrorKeyLockTrue();
    }
  };

  const handleNewChapterSubmit = (event) => {
    event.preventDefault();
    // Check if keyword and lockword are in the content
    if ((content.includes(keyword)) && (content.includes(lockword))) {
      submitNewChapterForm();
    }
    else {
      setErrorKeyLockTrue();
    }
  };

  const handleParentChapterChoice = (event) => {
    setParentChapterChoice(event.target.value);
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
              {chapterEdit.parentChapter !== null && (
                <span>Chapitre parent actuel : {chapterEdit.parentChapter.title}<br /></span>
              )}
              Choisir le Chapitre parent :
              <select
                className="chapterEdit-parentChapter"
                id="chapterEdit-parentChapter"
                onChange={handleParentChapterChoice}
                defaultValue={chapterEdit.parentChapter !== null && chapterEdit.parentChapter.id}
              >
                <option
                  value={chapterEdit.parentChapter !== null && chapterEdit.parentChapter.id}
                >
                  Liste des Chapitres parent possible
                </option>
                <option value="">
                  Retirer le chapitre parent actuel
                </option>
                {parentChapterOption.map((chapter) => {
                  // Condition to prevent the option to select a chapter as his own parent
                  if (chapter.id !== parseInt(editOption, 10)) {
                    return (
                      <option
                        key={chapter.id}
                        value={chapter.id}
                      >
                        {chapter.title}
                      </option>
                    );
                  }
                })}
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
          {errorKeyLock && (
            <div className="errorMessage">
              La clé et/ou la serrure ne se trouve pas dans le contenu comme prévu.
            </div>
          )}
          <button type="submit" className="chapterEdit-Button">Enregistrer les modifications du chapitre</button>
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
              <select
                className="chapterEdit-parentChapter"
                id="chapterEdit-parentChapter"
                onChange={handleParentChapterChoice}
                defaultValue=""
              >
                <option disabled value="">
                  Liste des Chapitres parent possible
                </option>
                <option value="">
                  Pas de Chapitre parent pour le moment
                </option>
                {parentChapterOption.map((choice) => (
                  <option
                    key={choice.id}
                    value={choice.id}
                  >
                    {choice.title}
                  </option>
                ))}
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
          {errorKeyLock && (
            <div className="errorMessage">
              La clé et/ou la serrure ne se trouve pas dans le contenu comme prévu.
            </div>
          )}
          <button type="submit" className="chapterEdit-Button">Enregistrer le nouveau chapitre</button>
        </form>
      )}
    </>
  );
};

ChapterEdit.propTypes = {
  errorKeyLock: PropTypes.bool,
  setErrorKeyLockTrue: PropTypes.func.isRequired,
  setParentChapterChoice: PropTypes.func.isRequired,
  parentChapterOption: PropTypes.array.isRequired,
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
  chapterEdit: PropTypes.shape({
    parentChapter: PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
    }),
  }).isRequired,
};

ChapterEdit.defaultProps = {
  id: '',
  title: '',
  content: '',
  keyword: '',
  lockword: '',
  unlockText: '',
  errorKeyLock: false,
};

export default ChapterEdit;
