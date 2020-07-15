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

}) => {
  // console.log();
  return (

    <>
      <div className="gameScreen-content-text">
        <Typist
          cursor={{ show: false }}
        >
          <Typist.Delay ms={500} />
          {title}
        </Typist>
        <Typist
          cursor={{ show: false }}
        >
          <Typist.Delay ms={500} />
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
            <Typist.Delay ms={500} />
            {unlockText}
            <br />

            <button type="button" onClick={fetchNextChapter}>Chapitre suivant</button>
          </Typist>
        </>
        )}
      </div>
    </>
  );
};

Chapter.propTypes = {
  fetchNextChapter: PropTypes.func.isRequired,
  trueAnswer: PropTypes.bool.isRequired,

  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  unlockText: PropTypes.string.isRequired,
};

export default Chapter;
