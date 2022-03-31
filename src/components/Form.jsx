import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="name-input">
          Name:
          <input
            type="text"
            data-testid="name-input"
            id="name-input"
            name="name"
            value={ cardName } // Prop value recebe a prop cardName
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description-input">
          Description:
          <textarea
            type="text"
            data-testid="description-input"
            id="description-input"
            name="description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1-input">
          Attribute 1:
          <input
            type="number"
            data-testid="attr1-input"
            id="attr1-input"
            name="attribute1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2-input">
          Attribute 2:
          <input
            type="number"
            data-testid="attr2-input"
            id="attr2-input"
            name="attribute2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3-input">
          Attribute 3:
          <input
            type="number"
            data-testid="attr3-input"
            id="attr3-input"
            name="attribute3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image-input">
          Image:
          <input
            type="text"
            data-testid="image-input"
            id="image-input"
            name="image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare-input">
          Rarity:
          <select
            type="text"
            data-testid="rare-input"
            id="rare-input"
            name="rarity"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        {/* Requisito 7 finalizado com a ajuda de Vinicius de Paula */}
        { hasTrunfo
          ? <span>Você já tem um Super Trunfo em seu baralho</span>
          : (
            <label htmlFor="trunfo-input">
              Super Trunfo:
              <input
                type="checkbox"
                data-testid="trunfo-input"
                id="trunfo-input"
                name="isTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>
          ) }
        <button
          type="submit"
          data-testid="save-button"
          id="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
