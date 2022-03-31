import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      attribute1: '0',
      attribute2: '0',
      attribute3: '0',
      image: 'https://dummyimage.com/250/000/fff.png&text=Tryunfo',
      rarity: 'normal',
      isTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
      hasTrunfo: false,
    };
  }

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const objValue = type === 'checkbox' ? checked : value;

    this.setState({ [name]: objValue }, () => this.validateForm());
  };

  validateForm = () => {
    const {
      name,
      description,
      image,
      rarity,
      attribute1,
      attribute2,
      attribute3,
    } = this.state;

    const attr1 = parseInt(attribute1, 10);
    const attr2 = parseInt(attribute2, 10);
    const attr3 = parseInt(attribute3, 10);
    const maxAttrValue = 90;
    const maxAttrSum = 210;
    let formIsValid = true;

    if (!name.length || !description.length || !image.length || !rarity.length) {
      formIsValid = false;
    }

    if (attr1 + attr2 + attr3 > maxAttrSum) {
      formIsValid = false;
    }

    if (attr1 > maxAttrValue || attr2 > maxAttrValue || attr3 > maxAttrValue) {
      formIsValid = false;
    }

    if (attr1 < 0 || attr2 < 0 || attr3 < 0) {
      formIsValid = false;
    }

    this.setState({
      isSaveButtonDisabled: !formIsValid,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newCard = this.state;
    const { isTrunfo } = this.state;

    this.setState((prevState) => ({
      name: '',
      description: '',
      attribute1: '0',
      attribute2: '0',
      attribute3: '0',
      image: '',
      rarity: 'normal',
      isTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [...prevState.deck, newCard],
    }));
    if (isTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }
  }

  /* Requisito 9 finalizado com a ajuda de Vinicius de Paula */
  handleRemove = () => {
    const { deck } = this.state;
    deck.filter((card) => (card ? this.setState({
      deck: [], hasTrunfo: false }) : null));
  }

  render() {
    const {
      name,
      description,
      attribute1,
      attribute2,
      attribute3,
      image,
      rarity,
      isTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      deck,
    } = this.state;

    return (
      <>
        <h1 className="title">Tryunfo Project</h1>
        <main className="container-main">
          <div className="container-half">
            <div className="card-background">
              <h1>Card</h1>
              <Form
                cardName={ name } // prop cardName recebe this.state.name
                cardDescription={ description }
                cardAttr1={ attribute1 }
                cardAttr2={ attribute2 }
                cardAttr3={ attribute3 }
                cardImage={ image }
                cardRare={ rarity }
                cardTrunfo={ isTrunfo }
                onInputChange={ this.handleChange }
                isSaveButtonDisabled={ isSaveButtonDisabled }
                onSaveButtonClick={ this.handleSubmit }
                hasTrunfo={ hasTrunfo }
              />
            </div>
          </div>
          <div className="container-half">
            <div className="card-background">
              <h1>Card Preview</h1>
              <br />
              <Card
                cardName={ name }
                cardDescription={ description }
                cardAttr1={ attribute1 }
                cardAttr2={ attribute2 }
                cardAttr3={ attribute3 }
                cardImage={ image }
                cardRare={ rarity }
                cardTrunfo={ isTrunfo }
              />
            </div>
          </div>
        </main>
        <div className="container-deck">
          {/* Requisito 8 finalizado com a ajuda de Vinicius de Paula */}
          <h1 className="deck-title">List of Cards</h1>
          <div className="card-list">
            { deck.map((card, index) => (
              <div className="card-deck" key={ index }>
                <br />
                <Deck
                  cardName={ card.name }
                  cardDescription={ card.description }
                  cardAttr1={ card.attribute1 }
                  cardAttr2={ card.attribute2 }
                  cardAttr3={ card.attribute3 }
                  cardImage={ card.image }
                  cardRare={ card.rarity }
                  cardTrunfo={ card.isTrunfo }
                />
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ this.handleRemove }
                >
                  Excluir
                </button>
              </div>
            )) }
          </div>
        </div>
      </>
    );
  }
}

export default App;
