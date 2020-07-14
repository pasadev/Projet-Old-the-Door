import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';

const Chapter = ({
  title,
  content,
  unlockText,
  trueAnswer,
  fetchNextChapter,

}) => (
  <>
    <div className="gameScreen-content-text">
      <Typist
        cursor={{ show: false }}
      >
        <Typist.Delay ms={5000} />
        {title}
      </Typist>
      <Typist
        cursor={{ show: false }}
      >
        <Typist.Delay ms={9000} />
        {content}
      </Typist>
    </div>
    <div className="gameScreen-content-unlockText">
      {trueAnswer && (
      <>
        <Typist
          cursor={{ show: false }}
        >
          <br />
          <Typist.Delay ms={1000} />
          {unlockText}
          <br />

          <button type="button" onClick={fetchNextChapter}>Chapitre suivant</button>
        </Typist>
      </>
      )}
    </div>
  </>
);

Chapter.propTypes = {
  fetchNextChapter: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  unlockText: PropTypes.string.isRequired,
  trueAnswer: PropTypes.bool.isRequired,
};

export default Chapter;
