import React from 'react';
import './Card.css';

const Card = ({ image, value, suit }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="{image}"
          alt="{value} of {suit}"
          class="card"
          id="{value}-{suit}"
        />
      </div>
    </div>
  );
};

export default Card;
