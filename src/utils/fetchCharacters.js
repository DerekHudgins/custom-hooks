const fetchCharacters = (activePage) => {
  return fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?page=${activePage}`
  )
    .then((res) => res.json())
    .then((data) => data.results);
};
export default fetchCharacters;
