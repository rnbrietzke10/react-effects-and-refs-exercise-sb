import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css';

const Deck = () => {
  const [deck, setDeck] = useState(null);
  const [draw, setDraw] = useState([]);

  useEffect(() => {
    const getDeck = async () => {
      let newDeck = await axios.get(
        `http://deckofcardsapi.com/api/deck/new/shuffle/`
      );
      setDeck(newDeck.data);
    };
    getDeck();
  });

  return (
    <div className='deck-container'>
      <header>
        <button className='btn' id='get-card'>
          Get a Card
        </button>
      </header>
      {deck.map(card => (
        <Card />
      ))}
    </div>
  );
};

export default Deck;
