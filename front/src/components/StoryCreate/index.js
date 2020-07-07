import React from 'react';
import Proptypes
const StoryCreate = ({}) => (

  <main>
    <form action="submit" name="storyCreate">
      <input type="text" id="storyCreate-title" name="storyCreate-title" />
      <input type="text" id="storyCreate-synopsis" name="storyCreate-synopsis" />
      <input type="text" id="storyCreate-description" name="storyCreate-description" />
      <button type="submit">C'est parti</button>
    </form>
  </main>

);
export default StoryCreate;
