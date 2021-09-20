import React from 'react';
import List from '../components/list/List';
import useCharacters from '../services/useCharacters';
import Pagination from 'react-js-pagination';
import styles from './styles/Main.css';

const Main = () => {
  const { loading, characters, activePage, handleClick } = useCharacters();

  return loading ? (
    <>Loading...</>
  ) : (
    <section className={styles.Main}>
      <Pagination
        activePage={activePage}
        totalItemsCount={801}
        itemsCountPerPage={20}
        onChange={handleClick}
        firstPageText="first"
        lastPageText="last"
        prevPageText="prev"
        nextPageText="next"
      />
      <List characters={characters} />
    </section>
  );
};

export default Main;
