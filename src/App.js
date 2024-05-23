// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ListeFilms from './ListeFilms';
import Filtrer from './Filtrer';
import FilmDetails from './FilmDetails';

function App() {
  const [films, setFilms] = useState([]);

  const ajouterFilm = (nouveauFilm) => {
    setFilms([...films, nouveauFilm]);
  };

  return (
    <Router>
      <div className="App">
        <h1>Gestion de Films</h1>
        <Filtrer onFiltrer={ajouterFilm} />
        <Switch>
          <Route exact path="/" component={() => <ListeFilms films={films} />} />
          <Route path="/film/:id" component={(props) => <FilmDetails {...props} films={films} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
