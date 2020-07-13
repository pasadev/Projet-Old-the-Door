import React from 'react';
import './storyEdit.scss';

const StoryEdit = () => (
  <main className="storyEdit">
    <h1>
      Titre de l'aventure
    </h1>
    <form action="submit" name="storyEdit-form">

      <button type="submit"> Chapitre suivant</button>
      <button type="submit"> Fin de l'aventure</button>
    </form>
  </main>
);

export default StoryEdit;
