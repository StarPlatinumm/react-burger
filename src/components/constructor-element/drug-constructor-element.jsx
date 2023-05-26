import React from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import drugElementStyles from './drug-constructor-element.module.css';

class DragConstructorElement extends React.Component {
  render() {
    return (
      <div className={`${drugElementStyles['item']} pb-2 pt-2`}>
        {!this.props.isLocked ? (
          <DragIcon />
        ) : (
          <div></div>
        )}
        <ConstructorElement
          type={this.props.type}
          isLocked={this.props.isLocked}
          text={this.props.text}
          price={this.props.price}
          thumbnail={this.props.thumbnail}
        />
      </div>
    );
  }
}

export default DragConstructorElement;