import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/ItemDetails.css';

const ItemDetails = ({ character }) => {
  [character] = character;
  return (
    <main className={styles.ItemDetails}>
      <article>{(character.pokemon)}</article>
      <img src={character.url_image} alt={(character.pokemon)} />
      <section className={styles.details}>
        <p>Height: {character.height}</p>
        <p>Weight: {character.weight}</p>
        <p>Primary Type: {character.type_1}</p>
        <p>Secondary Type: {character.type_2}</p>
        <p>Pokebase: {character.pokebase}</p>
      </section>
    </main>
  );
};

ItemDetails.propTypes = {
  character: PropTypes.array,
};
export default ItemDetails;
