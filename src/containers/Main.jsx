import React from 'react';
import List from '../components/list/List';
import useCharacters from '../services/useCharacters';

const Main = () => {
  const { loading, characters } = useCharacters();
  return loading ? <>Loading...</> : <List characters={characters} />;
};
export default Main;
