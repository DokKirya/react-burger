import React from 'react';
import style from './BurgerIngredients.module.css';
import Tabs from './Tabs/Tabs';
import IngredientsList from './IngredientsList/IngredientsList';
import { dataPropTypes } from '../PropTypes/PropTypes';
import PropTypes from 'prop-types';

const BurgerIngredients = ({ data, handleOpenModal }) => {
  return (
    <div className={style.container}>
      <h2 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h2>
      <Tabs />
      <section className={style.card__container}>
        <IngredientsList
          id="bun"
          title="Булки"
          ingredients={data.filter((i) => i.type === 'bun')}
          handleOpenModal={handleOpenModal}
        />
        <IngredientsList
          id="sauce"
          title="Соусы"
          ingredients={data.filter((i) => i.type === 'sauce')}
          handleOpenModal={handleOpenModal}
        />
        <IngredientsList
          id="main"
          title="Начинки"
          ingredients={data.filter((i) => i.type === 'main')}
          handleOpenModal={handleOpenModal}
        />
      </section>
    </div>
  );
};

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default BurgerIngredients;