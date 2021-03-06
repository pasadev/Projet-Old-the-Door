import React, { useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { slugifyTitle } from 'src/utils';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import Loader from 'src/components/Loader';
import AdventureEdit from 'src/containers/AdventureEdit/index.js';
import ChapterEdit from 'src/containers/ChapterEdit';
import './storyEdit.scss';

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
    submitAdvEditForm(
      storyEdit.title,
      storyEdit.synopsis,
      storyEdit.description,
      storyEdit.idStory,
    );
  };

  const handleEditOption = (event) => {
    setEditOption(event.target.value);
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
      {redirect && <Redirect to={`/aventures/${slugifyTitle(storyEdit.title)}`} />}
      {!redirect && (
        <>
          {loading && <Loader />}
          {!loading && (
            <main className="storyEdit">
              <h1 className="main-title">
                <Typist
                  cursor={{ hideWhenDone: true }}
                >
                  Editer : {initialTitle}
                </Typist>
              </h1>

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
                  <button type="submit">Enregistrer les modifications sur l'aventure</button>
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
// TODO clean state after submit

StoryEdit.propTypes = {
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
    title: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    firstChapter: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,
  chapters: PropTypes.array.isRequired,
  chapterEdit: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default StoryEdit;
