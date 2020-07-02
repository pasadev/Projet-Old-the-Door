import React from 'react';

const ChapterCreate = () => (

  <main>
    <form action="submit">
      <input type="text" id="choixEdition" name="choixEdition" />
      <input type="text" id="chapitreParent" name="chapitreParent" />
      <input type="text" id="nomChapitre" name="nomChapitre" />
      <input type="text" id="texteChapitre" name="texteChapitre" />

      <button type="submit">C'est parti</button>
    </form>
  </main>
);

export default ChapterCreate;
