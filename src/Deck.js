import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Deck.css';

const Deck = () => {
  const [deck, setDeck] = useState([]);
  return (
    <div className="deck-container">
      <header>
        <button className="btn" id="get-card">
          Get a Card
        </button>
      </header>
      <Card />
    </div>
  );
};

export default Deck;
