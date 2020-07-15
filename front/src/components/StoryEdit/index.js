import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
            <select className="storyEdit-form-editChoice" id="">
              {/* TODO map */}
              <option value="">
                Aventure
              </option>
              <option value="">
                Chap 1 : Bla
              </option>
              <option value="">
                Chap 2 : BlaBla
              </option>
            </select>

            {/* Display condition edit chap or adv */}
            <AdventureEdit />
            {/* <ChapterEdit /> */}
            <button type="submit">Enregistrer ces modifications</button>
          </form>
        </main>
      )}
    </>
  );
};

StoryEdit.propTypes = {
  submitAdvEditForm: PropTypes.func.isRequired,
  displayLoader: PropTypes.func.isRequired,
  fetchAdvEditSelected: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  // Adventure
  storyEdit: PropTypes.shape({
    title: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default StoryEdit;
