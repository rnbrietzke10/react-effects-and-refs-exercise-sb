import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="{card.image}"
          alt="{card.value} of {card.suit}"
          class="card"
          id="{card.value}-{card.suit}"
        />
      </div>
    </div>
  );
};

export default Card;
