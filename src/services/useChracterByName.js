import { useState, useEffect } from 'react';
import fetchCharacterByName from '../utils/fetchCharacterByName';

const useCharacterByName = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);
  const name = match.params.name;

  useEffect(() => {
    fetchCharacterByName(name).then((character) => {
      setCharacter(character);
      setLoading(false);
    });
  }, []);

  return { loading, character };
};

export default useCharacterByName;
