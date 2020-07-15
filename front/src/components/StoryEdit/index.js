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
                La page d'édition pour : {storyEdit.title}
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
                    <option value="">
                      Ce que vous voulez editer
                    </option>
                    <option value={storyEdit.title}>
                      {storyEdit.title}
                    </option>
                    {chapters.map((chapter) => (
                      <option
                        key={chapter.id}
                        value={chapter.title}
                      >
                        {chapter.title}
                      </option>
                    ))}
                  </select>
                </label>

                {editOption === storyEdit.title && <AdventureEdit />}

                {chapters.map((chapter) => (
                  <ChapterEdit {...chapter} key={chapter.id} />
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

StoryEdit.propTypes = {
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
