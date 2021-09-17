const url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=';

const fetchCharacters = (name) => {
  return fetch(`${url}${name}`)
    .then((res) => res.json())
    .then((data) => data.results);
};

export default fetchCharacters;
