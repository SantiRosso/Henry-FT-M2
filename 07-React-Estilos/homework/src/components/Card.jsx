import React from 'react';
import s from './Card.module.css';

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
  return (<div className={s.divContenedor}>
    {/* <div className={s.contenedorBtn}> */}
    <button className={s.btn} onClick = {onClose}>X</button>
    {/* </div> */}
    <h4>{name}</h4>
    <div className={s.infoCont}>
      <div className={s.subDiv}>
        <p>Min</p>
        <p>{min}</p>
      </div>
      <div className={s.subDiv}>
        <p>Max</p>
        <p>{max}</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img not found"/>
    </div>
  </div>)
};