/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import { PlusSquare, MinusSquare } from 'react-feather';
import PropTypes from 'prop-types';

const Architecture = ({
  firstChapter,
  firstChapterId,
  chapters,
  previousChapterMapped,
  chaptersDisplay,
  structureView,
  showStoryStructure,
  hideStoryStructure,
}) => {
  useEffect(() => {

  }, []);
  // Array to put the chapter in
  chaptersDisplay = [];
  // Start with the firstChapter
  previousChapterMapped[0] = firstChapterId;
  // Loop for every chapters
  for (let i = 0, indexChapters = 1; i < chapters.length; i++) {
    // Map to push in an array only the chapter that's the previousChapter's child
    chapters.map((chapter) => {
      if (chapter.parentChapter !== null) {
        if (chapter.parentChapter.id === previousChapterMapped[0]) {
          indexChapters++;
          previousChapterMapped[0] = chapter.id;
          chaptersDisplay.push(
            <div className="architecture-row" key={chapter.id}>
              <span>#{indexChapters}: {chapter.title}</span>
            </div>,
          );
        }
      }
    });
  }

  return (
    <section className="architecture">
      {/* Adventure */}
      {!structureView && <span className="architecture-link" onClick={showStoryStructure}>Sommaire&nbsp;<PlusSquare /></span>}
      {structureView && <span className="architecture-link" onClick={hideStoryStructure}>Sommaire&nbsp;<MinusSquare /></span>}
      {structureView && (
        <div className="architecture-details">
          {firstChapter !== null && (
            <div className="architecture-row">
              <span>#1: {firstChapter}</span>
            </div>
          )}

          {/* Chapter with a parent */}
          {chaptersDisplay}
          {/* Display the chapters without parent category only when we have some */}
          {(chapters.length - chaptersDisplay.length) > 1 && <div className="architecture-subtitle">Chapitres sans parents</div>}
          {/* Chapter without a parent */}
          {chapters.map((chapter) => {
            if ((chapter.parentChapter == null) && (chapter.id !== firstChapterId)) {
              return (
                <div key={chapter.id}>
                  <span>- {chapter.title}</span>
                </div>
              );
            }
          })}
        </div>
      )}

    </section>
  );
};

Architecture.propTypes = {
  firstChapter: PropTypes.string,
  firstChapterId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  chapters: PropTypes.array,
  previousChapterMapped: PropTypes.array,
  chaptersDisplay: PropTypes.array,
  structureView: PropTypes.bool.isRequired,
  showStoryStructure: PropTypes.func.isRequired,
  hideStoryStructure: PropTypes.func.isRequired,
};

Architecture.defaultProps = {
  firstChapter: null,
  chapters: [],
  firstChapterId: null,
  previousChapterMapped: [],
  chaptersDisplay: [],
};

export default Architecture;
