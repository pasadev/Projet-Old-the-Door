import React from 'react';

const ChapterCreate = () => (

  <main>
    <form action="submit">
      <input type="text" id="choixEdition" name="choixEdition" />
      <input type="text" id="chapitreParent" name="chapitreParent" />
      <input type="text" id="nomChapitre" name="nomChapitre" />
      <input type="text" id="texteChapitre" name="texteChapitre" />

      <input type="text" id="clef" name="clef" />
      <input type="text" id="serrure" name="serrure" />
      <div className="messageReussite"> message de reussite</div>

      <button type="submit"> Chapitre suivant</button>
      <button type="submit"> Fin de l'aventure</button>
    </form>
  </main>
);

export default ChapterCreate;
