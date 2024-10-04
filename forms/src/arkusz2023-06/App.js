import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');

  const handleAdd = () => {
    console.log(`tytul: ${title}; rodzaj: ${genre}`);
  };

  const genres = [
    { value: '', label: 'Wybierz rodzaj' },
    { value: '1', label: 'Komedia' },
    { value: '2', label: 'Obyczajowy' },
    { value: '3', label: 'Sensacyjny' },
    { value: '4', label: 'Horror' }
  ];

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="filmTitle">Tytuł filmu</label>
          <input
            type="text"
            className="form-control"
            id="filmTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="filmGenre">Rodzaj</label>
          <select
            className="form-control"
            id="filmGenre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            {genres.map((genre) => (
              <option key={genre.value} value={genre.value}>
                {genre.label}
              </option>
            ))}
          </select>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          Dodaj
        </button>
      </form>
    </div>
  );
}

export default App;
