import React from 'react';

const ChapterCreate = () => (

  <main>
    <form action="submit" name="chapterCreate">
      <input type="text" id="chapterCreate-edit" name="chapterCreate-edit" />
      <input type="text" id="chapterCreate-parent" name="chapterCreate-parent" />
      <input type="text" id="chapterCreate-name" name="chapterCreate-name" />
      <input type="text" id="chapterCreate-text" name="chapterCreate-text" />

      <input type="text" id="chapterCreate-key" name="chapterCreate-key" />
      <input type="text" id="chapterCreate-lock" name="chapterCreate-lock" />
      <div className="winningMessage"> message de reussite</div>

      <button type="submit"> Chapitre suivant</button>
      <button type="submit"> Fin de l'aventure</button>
    </form>
  </main>
);

export default ChapterCreate;
