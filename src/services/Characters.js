import { useState, useEffect } from 'react';
const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);


  return { loading, characters };
};
const [loading, setLoading] = useState(true);
