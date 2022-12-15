import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css';

const Deck = () => {
  const [deck, setDeck] = useState([]);

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

  return (
    <div className="deck-container">
      <header>
        <button className="btn" id="get-card">
          Get a Card
        </button>
      </header>
      {console.log(deck)}
      {/* {deck.map((card) => (
        <Card />
      ))} */}
    </div>
  );
};

export default Deck;
