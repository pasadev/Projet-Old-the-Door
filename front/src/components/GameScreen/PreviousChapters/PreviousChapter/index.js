import React from 'react';
import PropTypes from 'prop-types';

const PreviousChapter = ({
  title,
  content,
  unlockText,

}) => (
  <>
    <h3 className="gameScreen-chapterTitle">{title}</h3>
    {content}
    <div className="gameScreen-unlockText">{unlockText}</div>
  </>
);

PreviousChapter.propTypes = {

  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  unlockText: PropTypes.string.isRequired,
};

export default PreviousChapter;
