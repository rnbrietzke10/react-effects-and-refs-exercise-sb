import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css';

const Deck = () => {
  const [deck, setDeck] = useState([]);
  const [drawnCards, setDrawnCards] = useState([]);
  const [autoDraw, setAutoDraw] = useState(false);
  const timerRef = useRef(null);

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
  useEffect(() => {
    const drawCard = async () => {
      try {
        const cardsData = await axios.get(
          `http://deckofcardsapi.com/api/deck/${deck.deck_id}/draw`
        );
        if (cardsData.data.remaining === 0) {
          setAutoDraw(false);
          throw new Error('Error: no cards remaining!');
        }

        const card = cardsData.data.cards[0];

        await setDrawnCards(drawnDeck => [
          ...drawnDeck,
          {
            id: card.code,
            name: card.suit + ' ' + card.value,
            image: card.image,
          },
        ]);
      } catch (err) {
        alert(err);
      }
    };

    if (autoDraw && !timerRef.current) {
      timerRef.current = setInterval(async () => {
        await drawCard();
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [autoDraw, setAutoDraw, deck]);

  const toggleAutoDraw = () => {
    setAutoDraw(auto => !auto);
  };

  return (
    <div className='deck-container'>
      <header>
        {deck ? (
          <button className='btn' id='get-card' onClick={toggleAutoDraw}>
            {autoDraw ? 'Stop' : 'Keep'} Drawing cards!
          </button>
        ) : null}
      </header>

      {drawnCards.map(card => (
        <Card key={card.id} name={card.name} image={card.image} />
      ))}
    </div>
  );
};

export default Deck;
