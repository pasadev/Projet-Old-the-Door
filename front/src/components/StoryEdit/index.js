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
}) => {
  const { slug } = useParams();
  useEffect(() => {
    fetchAdvEditSelected(slug);
    displayLoader();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <main className="storyEdit">
          <h1>
            La page d'édition pour : {storyEdit.title}
          </h1>
          <form action="submit" className="storyEdit-form">
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
  displayLoader: PropTypes.func.isRequired,
  fetchAdvEditSelected: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  // Adventure
  storyEdit: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default StoryEdit;
