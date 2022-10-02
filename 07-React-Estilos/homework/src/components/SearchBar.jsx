import React from 'react';
import s from './SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return (<div className={s.contenedor}>
    <input type="text" placeholder='City...'></input>
    <button className={s.btn} onClick={()=>props.onSearch('Buscando a Nemo...')}>Search</button>
  </div>)
};