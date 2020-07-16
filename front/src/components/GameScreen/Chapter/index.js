/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';

const Chapter = ({
  title,
  content,
  unlockText,
  trueAnswer,
  fetchNextChapter,
  previousChapters,

}) => (
  <>
    <div className="gameScreen-content-text">
      <Typist
        cursor={{ show: false }}
        avgTypingDelay={50}
      >

        <Typist.Delay ms={previousChapters.length === 0 ? 8000 : 1000} />
        <h3 className="gameScreen-chapterTitle">{title}</h3>
      </Typist>
      <Typist
        cursor={{ show: false }}
        avgTypingDelay={15}
      >
        <Typist.Delay ms={previousChapters.length === 0 ? 8500 : 1500} />
        {content}
      </Typist>
    </div>
    <div className="gameScreen-unlockText">
      {trueAnswer && (
      <>
        <Typist
          cursor={{ show: false }}
          avgTypingDelay={30}
        >
          <Typist.Delay ms={1000} />
          { unlockText + " " }

          <span className="gameScreen-actionButton" onClick={fetchNextChapter}>> Chapitre suivant</span>
        </Typist>
      </>
      )}
    </div>
  </>
);

Chapter.propTypes = {
  fetchNextChapter: PropTypes.func.isRequired,
  trueAnswer: PropTypes.bool.isRequired,
  previousChapters: PropTypes.array.isRequired,

  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  unlockText: PropTypes.string.isRequired,
};

export default Chapter;
