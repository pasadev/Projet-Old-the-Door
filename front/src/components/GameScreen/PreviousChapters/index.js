/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import PreviousChapter from './PreviousChapter';

const PreviousChapters = ({
  previousChapters,
}) => {
  return (
    <div className="gameScreen-content-previousChapters">
      {previousChapters.map((previousChapter) => (
        <PreviousChapter {... previousChapter} key={previousChapter.id} />
      ))}
    </div>
  );
};

PreviousChapters.propTypes = {
  previousChapters: PropTypes.array.isRequired,
};

export default PreviousChapters;
