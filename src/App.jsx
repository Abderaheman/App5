// App.js
import React, { useState } from 'react';
import './App.css';
import ListeFilms from './ListeFilms';
import Filtrer from './Filtrer';

function App() {
  const [films, setFilms] = useState([]);

  const ajouterFilm = (nouveauFilm) => {
    setFilms([...films, nouveauFilm]);
  };

  return (
    <div className="App">
      <h1>Gestion de Films</h1>
      <Filtrer onFiltrer={ajouterFilm} />
      <ListeFilms films={films} />
    </div>
  );
}

export default App;
