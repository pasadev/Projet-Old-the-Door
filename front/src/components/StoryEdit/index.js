import React, { useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { slugifyTitle } from 'src/utils';
import PropTypes from 'prop-types';

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
}) => {
  const { slug } = useParams();
  useEffect(() => {
    fetchAdvEditSelected(slug);
    displayLoader();
  }, []);

  const handleStoryEditSubmit = (event) => {
    event.preventDefault();
    submitAdvEditForm(storyEdit.title, storyEdit.synopsis, storyEdit.description, storyEdit.id);
  };

  const handleEditOption = (event) => {
    setEditOption(event.target.value);
    fetchChapterEditSelected(event.target.value);
  };

  return (
    <>
      {redirect && <Redirect to={`/aventures/${slugifyTitle(storyEdit.title)}`} />}
      {!redirect && (
        <>
          {loading && <Loader />}
          {!loading && (
            <main className="storyEdit">
              <h1>
                La page d'édition pour : {initialTitle}
              </h1>
              <form
                className="storyEdit-form"
                onSubmit={handleStoryEditSubmit}
              >
                <label htmlFor="storyEdit-form-editChoice">
                  Editer :
                  <select
                    className="storyEdit-form-editChoice"
                    id="storyEdit-form-editChoice"
                    onChange={handleEditOption}
                  >
                    <option value="newChapter" defaultValue>
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

                {editOption === initialTitle && <AdventureEdit />}

                {editOption === 'Nouveau Chapitre' && <ChapterEdit title="Nouveau Chapitre" />}

                {chapters.map((chapter) => (
                  <ChapterEdit {...chapter} key={chapter.id} id={`${chapter.id}`} />
                ))}

                {editOption !== '' && (<button type="submit">Enregistrer ces modifications</button>)}
              </form>
            </main>
          )}
        </>
      )}
    </>
  );
};
// TODO split form by 3, one for AdventureEdit, one for NewChapter and one for ChapterEdit

StoryEdit.propTypes = {
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
    id: PropTypes.oneOfType([
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
};

export default StoryEdit;
