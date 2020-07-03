import React from 'react';

const GameScreen = () => (

  <main>
    <div>
      <form>
        <label htmlFor="game-key"> Déclencheur</label>
        <input name="game-key" id="game-key" placeholder="key" />

        <label htmlFor="game-lock"> Support</label>
        <input name="game-lock" id="game-lock" placeholder="lock" />
      </form>
    </div>
    <button type="submit">Tester</button>
    <h1>nom de chapitre</h1>

    <div className="game-adventureText">This is where text goes.</div>
    <div>ici un bouton pour remonter en haut de la page</div>
  </main>

);
export default GameScreen;

// pour récuperer les données par props
