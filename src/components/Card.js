import React from 'react';
import './Card.css';

const Card = ({ name, email, id }) => {
  return (
    <div className='card'>
      <img
        src={`https://robohash.org/jsm${id}?set=set2`}
        alt='robot' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
