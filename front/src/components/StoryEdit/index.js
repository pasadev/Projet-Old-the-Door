import React, { useEffect } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import Loader from 'src/components/Loader';
import AdventureEdit from 'src/containers/AdventureEdit';
import ChapterEdit from 'src/containers/ChapterEdit';
import Architecture from 'src/containers/StoryEdit/Architecture';
import './storyEdit.scss';
import 'src/components/ChapterEdit/chapterEdit.scss';

const StoryEdit = ({
  storyEdit,
  fetchAdvEditSelected,
  displayLoader,
  loading,
  submitAdvEditForm,
  redirect,
  chapters,
  editOption,
  setEditOption,
  initialTitle,
  fetchChapterEditSelected,
  chapterEdit,
  clearChapterEdit,
  clearStoryEdit,
  setValidationErrorAdvEditTrue,
  setValidationErrorAdvEditFalse,
  setValidationErrorChapEditFalse,
  advSelectedSlug,
}) => {
  const { slug } = useParams();
  useEffect(() => {
    clearStoryEdit();
    clearChapterEdit();
    fetchAdvEditSelected(slug);
    displayLoader();
  }, []);

  const handleAdvEditSubmit = (event) => {
    event.preventDefault();
    // Reset error display
    setValidationErrorAdvEditFalse();
    if (
      ((storyEdit.title.length > 3) && !(/^\d+$/.test(storyEdit.title)))
      && (storyEdit.synopsis.length > 50)
      && (storyEdit.description.length > 50)
    ) {
      submitAdvEditForm();
    }
    else {
      setValidationErrorAdvEditTrue();
    }
  };

  const handleEditOption = (event) => {
    setEditOption(event.target.value);
    // Reset error display
    setValidationErrorAdvEditFalse();
    setValidationErrorChapEditFalse();
    // Condition to not do the get request if it's a new chapter or the adventure
    // And clear the state of chapterEdit
    if (event.target.value === 'Nouveau Chapitre' || event.target.value === initialTitle || event.target.value === '') {
      clearChapterEdit();
    }
    else {
      fetchChapterEditSelected(event.target.value);
    }
  };

  return (
    <>
      {redirect && <Redirect to={`/aventures/${advSelectedSlug}`} />}
      {!redirect && (
        <>
          {loading && <Loader />}
          {!loading && (
            <main className="storyEdit">
              <h1 className="main-title storyEdit-link">
                <Typist
                  cursor={{ hideWhenDone: true }}
                >
                  <Link
                    to={`/aventures/${slug}`}
                  >
                    {initialTitle}
                  </Link>
                </Typist>
              </h1>

              {/* display the adventure architecture if there is one */}
              {storyEdit.chapters.length > 0 && (
                <>
                  <Architecture
                    titleStory={storyEdit.title}
                    firstChapter={storyEdit.firstChapter.title}
                    firstChapterId={storyEdit.firstChapter.id}
                    chapters={storyEdit.chapters}
                  />
                </>
              )}

              <label htmlFor="storyEdit-form-editChoice">
                Editer :
                <select
                  className="storyEdit-form-editChoice"
                  id="storyEdit-form-editChoice"
                  onChange={handleEditOption}
                  defaultValue=""
                >
                  <option disabled value="">
                    Choix
                  </option>
                  <option value="Nouveau Chapitre">
                    Nouveau Chapitre
                  </option>
                  <option value={initialTitle}>
                    Aventure: {initialTitle}
                  </option>
                  {chapters.map((chapter) => (
                    <option
                      key={chapter.id}
                      value={chapter.id}
                    >
                      Chapitre: {chapter.title}
                    </option>
                  ))}
                </select>
              </label>

              {editOption === initialTitle && (
                <form
                  className="advEdit-form"
                  onSubmit={handleAdvEditSubmit}
                >
                  <AdventureEdit />
                  <button type="submit" className="storyEdit-Button">Enregistrer les modifications sur l'aventure</button>
                </form>
              )}

              <ChapterEdit {...chapterEdit} id={`${chapterEdit.id}`} />

            </main>
          )}
        </>
      )}
    </>
  );
};

StoryEdit.propTypes = {
  advSelectedSlug: PropTypes.string.isRequired,
  setValidationErrorChapEditFalse: PropTypes.func.isRequired,
  setValidationErrorAdvEditFalse: PropTypes.func.isRequired,
  setValidationErrorAdvEditTrue: PropTypes.func.isRequired,
  clearStoryEdit: PropTypes.func.isRequired,
  clearChapterEdit: PropTypes.func.isRequired,
  fetchChapterEditSelected: PropTypes.func.isRequired,
  initialTitle: PropTypes.string.isRequired,
  setEditOption: PropTypes.func.isRequired,
  editOption: PropTypes.string.isRequired,
  redirect: PropTypes.bool.isRequired,
  submitAdvEditForm: PropTypes.func.isRequired,
  displayLoader: PropTypes.func.isRequired,
  fetchAdvEditSelected: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  // Adventure
  storyEdit: PropTypes.shape({
    idStory: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    firstChapter: PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
    }),
    chapters: PropTypes.array,
  }).isRequired,
  chapters: PropTypes.array.isRequired,
  chapterEdit: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

StoryEdit.defautProps = {
  firstChapter: [],
};

export default StoryEdit;
