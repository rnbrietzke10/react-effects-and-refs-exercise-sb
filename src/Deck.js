import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css';

const Deck = () => {
  const [deck, setDeck] = useState([]);
  const getDeck = async () => {
    const data = await axios.get(
      'http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    );

    setDeck(data);
  };
  getDeck();
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
