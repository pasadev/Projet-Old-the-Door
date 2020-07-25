/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import { CornerDownRight } from 'react-feather';
import PropTypes from 'prop-types';

const Architecture = ({
  titleStory,
  firstChapter,
  firstChapterId,
  chapters,
  previousChapterMapped,
  chaptersDisplay,
}) => {
  useEffect(() => {

  }, []);
  // Array to put the chapter in
  chaptersDisplay = [];
  // Start with the firstChapter
  previousChapterMapped[0] = firstChapterId;
  // Loop for every chapters
  for (let i = 0; i < chapters.length; i++) {
    // Map to push in an array only the chapter that's the previousChapter's child
    chapters.map((chapter) => {
      if (chapter.parentChapter !== null) {
        if (chapter.parentChapter.id === previousChapterMapped[0]) {
          previousChapterMapped[0] = chapter.id;
          chaptersDisplay.push(
            <div className="architecture-row" key={chapter.id}>
              <CornerDownRight />
              <span>Chapitre suivant : {chapter.title}</span>
            </div>,
          );
        }
      }
    });
  }

  return (
    <section className="architecture">
      {/* Adventure */}
      <a href="#hide1" className="hide architecture-link" id="hide1">Architecture +</a>
      <a href="#show1" className="show architecture-link" id="show1">Architecture -</a>
      <div className="architecture-details">
        {firstChapter !== null && (
          <div className="architecture-row">
            <CornerDownRight />
            <span>Premier Chapitre : {firstChapter}</span>
          </div>
        )}

        {/* Chapter with a parent */}
        {chaptersDisplay}

        {/* Chapter without a parent */}
        {chapters.map((chapter) => {
          if ((chapter.parentChapter == null) && (chapter.id !== firstChapterId)) {
            return (
              <div key={chapter.id}>
                <span>Chapitre sans parent : {chapter.title}</span>
              </div>
            );
          }
        })}
      </div>

    </section>
  );
};

Architecture.propTypes = {
  titleStory: PropTypes.string.isRequired,
  firstChapter: PropTypes.string,
  firstChapterId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  chapters: PropTypes.array,
  previousChapterMapped: PropTypes.array,
  chaptersDisplay: PropTypes.array,
};

Architecture.defaultProps = {
  firstChapter: null,
  chapters: [],
  firstChapterId: null,
  previousChapterMapped: [],
  chaptersDisplay: [],
};

export default Architecture;
