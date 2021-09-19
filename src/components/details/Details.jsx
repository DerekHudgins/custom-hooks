import React from 'react';
import { useParams } from 'react-router-dom';
import useCharacterByName from '../../services/useCharacterByName';
import ItemDetails from './ItemDetails';

const Details = () => {
  const { name } = useParams();
  const { loading, character } = useCharacterByName(name);

  return loading ? <>Loading...</> : <ItemDetails character={character} />;
};

export default Details;
