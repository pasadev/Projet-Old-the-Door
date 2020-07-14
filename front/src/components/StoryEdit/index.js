import React, { useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { slugifyTitle } from 'src/utils';
import PropTypes from 'prop-types';

import Loader from 'src/components/Loader';
import AdventureEdit from 'src/containers/AdventureEdit/index.js';
// import ChapterEdit from './ChapterEdit';
import './storyEdit.scss';

const StoryEdit = ({
  storyEdit,
  fetchAdvEditSelected,
  displayLoader,
  loading,
  submitAdvEditForm,
  redirect,
}) => {
  const { slug } = useParams();
  useEffect(() => {
    fetchAdvEditSelected(slug);
    displayLoader();
  }, []);

  const handleStoryEditSubmit = (event) => {
    event.preventDefault();
    submitAdvEditForm(storyEdit.title, storyEdit.synopsis, storyEdit.description);
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
                  <select className="storyEdit-form-editChoice" id="storyEdit-form-editChoice">
                    {/* TODO map */}
                    <option value="">
                      {storyEdit.title}
                    </option>
                    { storyEdit.firstChapter !== null && (
                      <option value="">
                        {storyEdit.firstChapter.title}
                      </option>
                    )}
                    <option value="">
                      Chap 2 : BlaBla
                    </option>
                  </select>
                </label>

                {/* Display condition edit chap or adv */}
                <AdventureEdit />
                {/* <ChapterEdit /> */}
                <button type="submit">Enregistrer ces modifications</button>
              </form>
            </main>
          )}
        </>
      )}
    </>
  );
};

StoryEdit.propTypes = {
  redirect: PropTypes.bool.isRequired,
  submitAdvEditForm: PropTypes.func.isRequired,
  displayLoader: PropTypes.func.isRequired,
  fetchAdvEditSelected: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  // Adventure
  storyEdit: PropTypes.shape({
    title: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    firstChapter: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default StoryEdit;
