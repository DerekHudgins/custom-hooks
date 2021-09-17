const url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

const fetchCharacters = () => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.results);
};

export default fetchCharacters;
