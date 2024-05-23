// Filtrer.jsx
import React, { useState } from 'react';

const Filtrer = ({ onFiltrer }) => {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [note, setNote] = useState('');
  const [trailerURL, setTrailerURL] = useState('');

  const handleTitreChange = (e) => {
    setTitre(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePosterURLChange = (e) => {
    setPosterURL(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleTrailerURLChange = (e) => {
    setTrailerURL(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nouveauFilm = {
      titre,
      description,
      posterURL,
      note: parseInt(note),
      trailerURL
    };
    onFiltrer(nouveauFilm);
    setTitre('');
    setDescription('');
    setPosterURL('');
    setNote('');
    setTrailerURL('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titre du film"
        value={titre}
        onChange={handleTitreChange}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <input
        type="text"
        placeholder="URL de l'affiche"
        value={posterURL}
        onChange={handlePosterURLChange}
      />
      <input
        type="number"
        placeholder="Note"
        value={note}
        onChange={handleNoteChange}
      />
      <input
        type="text"
        placeholder="URL de la bande-annonce"
        value={trailerURL}
        onChange={handleTrailerURLChange}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default Filtrer;
