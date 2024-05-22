// FilmCard.jsx
import React from 'react';

const FilmCard = ({ film }) => {
  const { titre, description, posterURL, note } = film;

  return (
    <div className="film-card">
      <img src={posterURL} alt={titre} />
      <h2>{titre}</h2>
      <p>{description}</p>
      <p>Note : {note}</p>
    </div>
  );
};

export default FilmCard;
