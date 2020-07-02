import React from 'react';

const Connexion = () => (
  <main>
    <h1>Connexion</h1>
    <form action="submit" name="connexion">
      <input type="text" id="connexion-email" name="connexion-email" />
      <input type="text" id="connexion-password" name="connexion-password" />
      <button type="submit">Sign In</button>
    </form>
  </main>
);
export default Connexion;
