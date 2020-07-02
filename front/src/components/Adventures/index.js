import React from 'react';

import AdventureSmall from 'src/components/AdventureSmall';

import './adventures.scss';

const Adventures = () => (
  <main className="adventures">
    <h1 className="adventures-title">
      Voici toutes les aventures de notre catalogue
    </h1>
    <div className="adventures-container">
      <div className="adventureSmall-container">
        <AdventureSmall />
        <AdventureSmall />
        <AdventureSmall />
      </div>
    </div>
  </main>
);

export default Adventures;
