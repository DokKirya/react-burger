import React from 'react';
import PropTypes from 'prop-types';
import { dataPropTypes } from '../../PropTypes/PropTypes';
import Ingredient from '../Ingredient/Ingredient';
import style from './IngredientsList.module.css';

const IngredientsList = ({ id, title, ingredients, handleOpenModal }) => {
  return (
    <>
      <h3 id={id} className="text text_type_main-medium mt-10">
        {title}
      </h3>
      <ul className={style.container}>
        {ingredients.map((card) => (
          <Ingredient
            key={card._id}
            data={card}
            onOpenModal={handleOpenModal}
          />
        ))}
      </ul>
    </>
  );
};

 IngredientsList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
  handleOpenModal: PropTypes.func.isRequired
};

export default IngredientsList;