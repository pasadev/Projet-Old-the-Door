import React from 'react';
import { CornerDownRight } from 'react-feather';
import PropTypes from 'prop-types';

const Architecture = ({ title, firstChapter }) => (
  <section className="architecture">
    {title}
    {firstChapter !== null && (
      <CornerDownRight />
    )}
    {firstChapter !== null && (
      {  firstChapter }
    )}
  </section>
);

Architecture.propTypes = {
  title: PropTypes.string.isRequired,
  firstChapter: PropTypes.shape({
    title: PropTypes.string,
  }),
};

Architecture.defaultProps = {
  firstChapter: {
    title: '',
  }
};

export default Architecture;
