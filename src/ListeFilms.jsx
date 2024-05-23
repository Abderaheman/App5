// ListeFilms.jsx
import React, { useState } from 'react';
import FilmCard from './FilmCard';

const ListeFilms = ({ films }) => {
  const [filtreTitre, setFiltreTitre] = useState('');
  const [filtreNote, setFiltreNote] = useState('');

  const handleFiltreTitreChange = (e) => {
    setFiltreTitre(e.target.value);
  };

  const handleFiltreNoteChange = (e) => {
    setFiltreNote(e.target.value);
  };

  const filmsFiltres = films.filter(film => {
    return film.titre.toLowerCase().includes(filtreTitre.toLowerCase()) && 
           (filtreNote === '' || film.note >= parseInt(filtreNote));
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={filtreTitre}
        onChange={handleFiltreTitreChange}
      />
      <input
        type="number"
        placeholder="Filtrer par note minimale"
        value={filtreNote}
        onChange={handleFiltreNoteChange}
      />
      <div className="liste-films">
        {filmsFiltres.map((film, index) => (
          <FilmCard key={index} film={film} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ListeFilms;
