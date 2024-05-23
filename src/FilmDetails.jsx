// src/FilmDetails.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const FilmDetails = ({ match, films }) => {
  const film = films[match.params.id];

  if (!film) {
    return <div>Film non trouvé</div>;
  }

  return (
    <div>
      <h2>{film.titre}</h2>
      <p>{film.description}</p>
      <img src={film.posterURL} alt={film.titre} />
      <p>Note : {film.note}</p>
      {film.trailerURL && (
        <div>
          <h3>Bande-annonce</h3>
          <iframe
            width="560"
            height="315"
            src={film.trailerURL}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
};

export default FilmDetails;
