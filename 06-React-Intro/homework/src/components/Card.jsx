import React from 'react';
// import s from './Card.module.css';

// export default function Card(props) {
//   // acá va tu código
//   return (<div>
//     <button onClick = {props.onClose}>X</button>
//     <h4>{props.name}</h4>
//     <p>Min</p>
//     <p>{props.min}</p>
//     <p>Max</p>
//     <p>{props.max}</p>
//     <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img not found"/>
//   </div>)
// };

export default function Card({ onClose, name, min, max, img}) {
  // acá va tu código
  return (<div>
    <button onClick = {onClose}>X</button>
    <h4>{name}</h4>
    <p>Min</p>
    <p>{min}</p>
    <p>Max</p>
    <p>{max}</p>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img not found"/>
  </div>)
};