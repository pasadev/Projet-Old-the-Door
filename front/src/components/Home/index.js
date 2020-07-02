import React from 'react';

import AdventureSmall from 'src/components/AdventureSmall';

import './home.scss';

const Home = () => (
  <main className="home">
    <section className="presentation">
      <h1 className="presentation-title">
        Un titre cool
      </h1>
      <p className="presentation-description">
        Un texte de présentation qui claque !! Lorem ipsum dolor sit, amet consectetur adipisicing
        Quam unde aspernatur distinctio quae voluptatem id ipsa adipisci, provident ipsum officia
        eius itaque quibusdam architecto nam facilis impedit, perferendis laborum ullam?
      </p>
      <img
        className="presentation-image"
        src=""
        alt="Présentation du site"
      />
    </section>
    <section className="latest-adventures">
      <h2>
        Découvrez les dernières aventures crées par les joueurs !
      </h2>
      <div className="adventureSmall-container">
        <AdventureSmall />
        <AdventureSmall />
        <AdventureSmall />
      </div>
    </section>
  </main>
);

export default Home;
