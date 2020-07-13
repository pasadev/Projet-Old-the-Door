import React from 'react';
import PropTypes from 'prop-types';

/**
 * A field to be used inside a form : label and input
 */
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
