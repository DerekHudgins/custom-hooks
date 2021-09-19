import { useState, useEffect } from 'react';
import fetchCharacterByName from '../utils/fetchCharacterByName';

const useCharacterByName = (name) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetchCharacterByName(name).then((character) => {
      setCharacter(character);
      setLoading(false);
    });
  }, []);
  return { loading, character };
};
export default useCharacterByName;
