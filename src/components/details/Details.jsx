import React from 'react';
import { useParams } from 'react-router-dom';
import useCharacterByName from '../../services/useCharacterByName';

const Details = () => {
  const { name } = useParams();
  const { loading, character } = useCharacterByName(name);

  console.log(character);

//   loading ? loading... : ItemDetails
  return <></>;
};

export default Details;
