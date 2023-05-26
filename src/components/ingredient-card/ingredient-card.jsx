import React from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ingredientCardStyles from './ingredient-card.module.css';

class IngredientCard extends React.Component {
  render() {
    return (
      <div className={`${ingredientCardStyles['burger-ingredient']}`}>
        <Counter count={1} />
        <div className={`${ingredientCardStyles['burger-ingredient-image-wrapper']}`}>
          <img src={this.props.image} alt={this.props.name} />
        </div>
        <div className={`${ingredientCardStyles['burger-ingredient-price-wrapper']} text text_type_digits-default pt-1 pb-1`}>
          <div>{this.props.price}</div>
          <CurrencyIcon type="primary" />
        </div>
        <div className={`${ingredientCardStyles['burger-ingredient-title']}`}>
          {this.props.name}
        </div>
      </div>
    );
  }
}

export default IngredientCard;