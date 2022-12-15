import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css';

const Deck = () => {
  const [deck, setDeck] = useState([]);
  const [drawnCard, setDrawnCard] = useState([]);

  //   Get new shuffled deck of cards
  useEffect(() => {
    const getDeck = async () => {
      const data = await axios.get(
        'http://deckofcardsapi.com/api/deck/new/shuffle'
      );

      setDeck(data.data);
    };
    getDeck();
  }, [setDeck]);

  // Draw one card

  const drawCard = async () => {
    try {
      const cardsData = await axios.get(
        `http://deckofcardsapi.com/api/deck/${deck.deck_id}/draw`
      );
      if (cardsData.data.remaining === 0) {
        throw new Error('Error: no cards remaining!');
      }

      const card = cardsData.data.cards[0];

      setDrawnCard((drawnDeck) => [...drawnDeck, card]);
    } catch (err) {
      alert(err);
    }
  };

  const handleClick = async () => {
    await drawCard();
  };
  return (
    <div className="deck-container">
      <header>
        <button className="btn" id="get-card" onClick={handleClick}>
          Get a Card
        </button>
      </header>
      {drawnCard.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
};

export default Deck;
