/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import Field from 'src/components/Field';
import FieldArea from 'src/components/FieldArea';
import PropTypes from 'prop-types';

import { checkWordInContent } from 'src/utils';

import './chapterEdit.scss';

const ChapterEdit = ({
  firstChapter,
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
  validationErrorChapEdit,
  setValidationErrorChapEditTrue,
  setValidationErrorChapEditFalse,
}) => {
  const handleChapterEditSubmit = (event) => {
    event.preventDefault();
    // Reset error display
    setValidationErrorChapEditFalse();
    // Check the length of title and content
    if ((title.length > 3) && (content.length) > 50 && (unlockText.length) > 0) {
      // Check if keyword and lockword are in the content
      if (checkWordInContent(keyword, content) && checkWordInContent(lockword, content)) {
        submitChapterEditForm();
      }
      else {
        setErrorKeyLockTrue();
      }
    }
    else {
      setValidationErrorChapEditTrue();
    }
  };

  const handleNewChapterSubmit = (event) => {
    event.preventDefault();
    // Reset error display
    setValidationErrorChapEditFalse();
    // Check the length of title and content
    if ((title.length > 3) && (content.length) > 50 && (unlockText.length) > 0) {
      // Check if keyword and lockword are in the content
      if (checkWordInContent(keyword, content) && checkWordInContent(lockword, content)) {
        submitNewChapterForm();
      }
      else {
        setErrorKeyLockTrue();
      }
    }
    else {
      setValidationErrorChapEditTrue();
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
            {firstChapter.id !== parseInt(editOption, 10) && (
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
                    Chapitres parent possible
                  </option>
                  <option value="">
                    Retirer le choix actuel
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
            )}
            <Field
              className="chapterEdit-chapterTitle"
              identifier="title"
              placeholder="Le coffre"
              value={title}
              changeField={updateField}
              label="Titre :"
            />
            <FieldArea
              className="chapter-Edit-chapterText"
              identifier="content"
              placeholder="Vous voyez devant vous un bureau sur lequel est posé un coffre fermé par un cadenas, ainsi qu'une clé accroché à un clou sur le mur"
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
              label="Un mot Clé :"
            />
            <Field
              className="chapterEdit-lock"
              identifier="lockword"
              placeholder="Cadenas"
              value={lockword}
              changeField={updateField}
              label="Un mot Serrure :"
            />
            <Field
              className="chapterEdit-unlockText"
              identifier="unlockText"
              placeholder="Vous avez déverouillé le cadenas avec la clé et ouvrez le coffre ..."
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

          {validationErrorChapEdit && (
            <div className="validationError">
              Les informations envoyées ne correspondent pas aux prérequis
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
            {/* Conditional display if there is no chapter yet */}
            {firstChapter !== null && (
              <label htmlFor="chapterEdit-parentChapter">
                Choisir le Chapitre parent :
                <select
                  className="chapterEdit-parentChapter"
                  id="chapterEdit-parentChapter"
                  onChange={handleParentChapterChoice}
                  defaultValue=""
                >
                  <option disabled value="">
                    Chapitres parent possible
                  </option>
                  <option value="">
                    Aucun pour le moment
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
            )}
            <Field
              className="chapterEdit-chapterTitle"
              identifier="title"
              placeholder="Le coffre"
              value={title}
              changeField={updateField}
              label="Titre :"
            />
            <FieldArea
              className="chapter-Edit-chapterText"
              identifier="content"
              placeholder="Vous voyez devant vous un bureau sur lequel est posé un coffre fermé par un cadenas, ainsi qu'une clé accroché à un clou sur le mur"
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
              label="Un mot Clé :"
            />
            <Field
              className="chapterEdit-lock"
              identifier="lockword"
              placeholder="Cadenas"
              value={lockword}
              changeField={updateField}
              label="Un mot Serrure :"
            />
            <Field
              className="chapterEdit-unlockText"
              identifier="unlockText"
              placeholder="Vous avez déverouillé le cadenas avec la clé et ouvrez le coffre ..."
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

          {validationErrorChapEdit && (
            <div className="validationError">
              Les informations envoyées ne correspondent pas aux prérequis
            </div>
          )}

          <button type="submit" className="chapterEdit-Button">Enregistrer le nouveau chapitre</button>
        </form>
      )}
    </>
  );
};

ChapterEdit.propTypes = {
  setValidationErrorChapEditFalse: PropTypes.func.isRequired,
  setValidationErrorChapEditTrue: PropTypes.func.isRequired,
  validationErrorChapEdit: PropTypes.bool.isRequired,
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
  firstChapter: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }),
};

ChapterEdit.defaultProps = {
  id: '',
  title: '',
  content: '',
  keyword: '',
  lockword: '',
  unlockText: '',
  errorKeyLock: false,
  firstChapter: null,
};

export default ChapterEdit;
