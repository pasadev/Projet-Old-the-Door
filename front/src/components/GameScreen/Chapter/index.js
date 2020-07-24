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
        avgTypingDelay={20}
      >

        <Typist.Delay ms={previousChapters.length === 0 ? 5000 : 500} />
        <h3 className="gameScreen-chapterTitle">{title}</h3>
      </Typist>
      <Typist
        cursor={{ show: false }}
        avgTypingDelay={2}
      >
        <Typist.Delay ms={previousChapters.length === 0 ? 5500 : 1000} />
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
          {// eslint-disable-next-line prefer-template
          }{ unlockText + ' ' }

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
