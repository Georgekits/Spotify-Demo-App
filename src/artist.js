import React from 'react';

const Artist = (props) => {
  const {
    id,
    img,
    name,
    genre,
    year,
    selected
  } = props.artist;
  return (
    <li key={id} className='card'>
      <img src={img} alt="Avatar"/>
      <div className='container'>
        <div
          className={`heart ${selected ? 'red' : ''}`}
          onClick={() => props.onSelectedHeart(id)}>&hearts;</div>
        <h4><b>{name}</b></h4>
        <p>{`${genre} - ${year}`}</p>
      </div>
    </li>
  )
}

export default Artist;
