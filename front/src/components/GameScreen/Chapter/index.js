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
        avgTypingDelay={50}
      >
        <Typist.Delay ms={8000} />
        <h3 className="gameScreen-chapterTitle">{title}</h3>
      </Typist>
      <Typist
        cursor={{ show: false }}
        avgTypingDelay={15}
      >
        <Typist.Delay ms={9000} />
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
          {unlockText}

          <span className="gameScreen-actionButton" onClick={fetchNextChapter}> => Chapitre suivant</span>
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
