import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './styles/Card.css';

class Deck extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <>
        <h4 data-testid="name-card">{ cardName }</h4>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <span data-testid="description-card">
          Description:
          {' '}
          <br />
          { cardDescription }
        </span>
        <span data-testid="attr1-card">
          Attribute 1:
          {' '}
          { cardAttr1 }
        </span>
        <span data-testid="attr2-card">
          Attribute 2:
          {' '}
          { cardAttr2 }
        </span>
        <span data-testid="attr3-card">
          Attribute 3:
          {' '}
          { cardAttr3 }
        </span>
        <span data-testid="rare-card">
          Rarity:
          {' '}
          { cardRare }
        </span>
        <strong>
          { cardTrunfo === true && <span data-testid="trunfo-card">Super Trunfo</span> }
        </strong>
      </>
    );
  }
}

Deck.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Deck;
