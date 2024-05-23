// FilmCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const FilmCard = ({ film, index }) => {
  const { titre, description, posterURL, note } = film;

  return (
    <div className="film-card">
      <img src={posterURL} alt={titre} />
      <h2>{titre}</h2>
      <p>{description}</p>
      <p>Note : {note}</p>
      <Link to={`/film/${index}`}>Voir les détails</Link>
    </div>
  );
};

export default FilmCard;
