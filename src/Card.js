import React, { useState } from 'react';
import './Card.css';

const Card = ({ image, name, id }) => {
  const [{ angle, xPos, yPos }] = useState({
    angle: Math.random() * 90 - 45,
    xPos: Math.random() * 40 - 20,
    yPos: Math.random() * 40 - 20,
  });

  const transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  return (
    <div className='card-container'>
      <div className='card'>
        <img
          src={image}
          alt={name}
          className='card'
          id={id}
          style={{ transform }}
        />
      </div>
    </div>
  );
};

export default Card;
