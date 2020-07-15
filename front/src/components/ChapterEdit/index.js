import React from 'react';
import Field from 'src/components/Field';
import FieldArea from 'src/components/FieldArea';

const ChapterEdit = ({ id, title, content, keyword, lockword, unlockText}) => (
  <div className="chapterEdit">
    <select className="chapterEdit-parentChapter" id="">
      {/* TODO map */}
      <option value="">
        {title}
      </option>
      <option value="">
        Chap 1 : Bla
      </option>
      <option value="">
        Chap 2 : BlaBla
      </option>
    </select>
    <Field
      className="chapterEdit-chapterTitle"
      identifier="title"
      placeholder="titre"
      value={title}
      changeField={console.log('test')}
      label="titre :"
    />
    <FieldArea
      className="chapter-Edit-chapterText"
      identifier="content"
      placeholder="Contenu"
      value={content}
      changeField={console.log('test')}
      label="Contenu :"
    />
    <Field
      className="chapterEdit-key"
      identifier="keyword"
      placeholder="Clé"
      value={keyword}
      changeField={console.log('test')}
      label="Clé :"
    />
    <Field
      className="chapterEdit-lock"
      identifier="lockword"
      placeholder="Serrure"
      value={lockword}
      changeField={console.log('test')}
      label="Serrure :"
    />
    <Field
      className="chapterEdit-unlockText"
      identifier="unlockText"
      placeholder="Texte de réussite du chapitre"
      value={unlockText}
      changeField={console.log('test')}
      label="Texte de réussite du chapitre :"
    />
  </div>
);

export default ChapterEdit;
