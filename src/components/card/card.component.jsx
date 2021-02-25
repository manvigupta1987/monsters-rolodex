import React from 'react'
import './card.styles.css'

const Card = (props) => {
  const mystyle = {
    width:"250px",
    height:"150px"
   // CSS CODE
   };
  return (
    <div className='card-container'>
      <img alt="monsters" src={`https://robohash.org/${props.monster.id}?set=set2`} style={mystyle}/>
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
}

export default Card;