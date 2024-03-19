import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

const Pokedex = () => {
  const [list, setList] = useState([]);
  const [language, setLanguage] = useState('english');

  useEffect(() => {
    fetch("https://us-central1-it-sysarch32.cloudfunctions.net/pokemon")
      .then(response => response.json())
      .then(data => setList(data));
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="pokedex">
      <div className="language-buttons">
        <button onClick={() => handleLanguageChange('english')}>English</button>
        <button onClick={() => handleLanguageChange('japanese')}>Japanese</button>
        <button onClick={() => handleLanguageChange('chinese')}>Chinese</button>
        <button onClick={() => handleLanguageChange('french')}>French</button>
      </div>
      <div className="pokemon-list">
        {list.map(pokemon => (
          <Pokemon key={pokemon.id} pokemon={pokemon} language={language} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex