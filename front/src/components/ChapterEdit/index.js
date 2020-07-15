import React from 'react';
import Field from 'src/components/Field';
import FieldArea from 'src/components/FieldArea';

const ChapterEdit = () => (
  <div className="chapterEdit">
    <select className="chapterEdit-parentChapter" id="">
      {/* TODO map */}
      <option value="">
        Aucun
      </option>
      <option value="">
        Chap 1 : Bla
      </option>
      <option value="">
        Chap 2 : BlaBla
      </option>
    </select>
    <Field className="chapterEdit-chapterTitle" />
    <FieldArea className="chapter-Edit-chapterText" />
    <Field className="chapterEdit-key" />
    <Field className="chapterEdit-lock" />
    <Field className="chapterEdit-unlockText" />
  </div>
);

export default ChapterEdit;
