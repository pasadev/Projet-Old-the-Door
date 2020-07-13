/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import PreviousChapter from './PreviousChapter';

const PreviousChapters = ({
  previousChapters,
}) => {
  console.log('tet');
  return (
    <div className="gameScreen-content-previousChapters">
      {previousChapters.forEach((previousChapter) => (
        <>
          {console.log('test')}
          <PreviousChapter
            title={previousChapter.title}
            content={previousChapter.content}
            unlockText={previousChapter.unlockText}
          />
          <p>hello</p>
        </>
      ))}
    </div>
  );
};
  // todo
  // shows a new div but there is no data inside

PreviousChapters.propTypes = {
  previousChapters: PropTypes.array.isRequired,
};

export default PreviousChapters;
