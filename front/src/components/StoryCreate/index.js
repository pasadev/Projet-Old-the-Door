import React from 'react';

const StoryCreate = () => (

  <main>
    <form action="submit">
      <input type="text" id="title" name="title" />
      <input type="text" id="synopsis" name="synopsis" />
      <input type="text" id="description" name="description" />
      <button type="submit">C'est parti</button>
    </form>
  </main>

);
export default StoryCreate;
