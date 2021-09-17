import { useState, useEffect } from 'react';
import fetchCharacters from '../utils/fetchCharacters';

const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters().then((characters) => {
      setCharacters(characters);
      setLoading(false);
    }, []);
  });

  return { loading, characters };
};

export default useCharacters;
