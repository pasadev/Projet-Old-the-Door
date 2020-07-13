import React from 'react';
import PropTypes from 'prop-types';

const PreviousChapter = ({
  title,
  content,
  unlockText,

}) => (
  <>
    {title}<br />
    {content}<br />
    {unlockText}<br />
  </>
);

PreviousChapter.propTypes = {

  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  unlockText: PropTypes.string.isRequired,
};

export default PreviousChapter;
