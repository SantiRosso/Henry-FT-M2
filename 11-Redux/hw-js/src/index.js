const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.querySelector('#valor');

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  const numero = store.getState().contador;
  valor.innerHTML = numero;
  // Obtenemos la propiedad 'contador' de nuestro store:
  
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':

}

// Ejecutamos la funcion 'renderContador':
renderContador();


// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:
store.subscribe(renderContador);


// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:

const buttonIncrement = document.querySelector('#incremento');
const buttonDecrement = document.querySelector('#decremento');
const buttonIncrementImpar = document.querySelector('#incrementoImpar');
const buttonDecrementAsync = document.querySelector('#decrementoAsync');
const buttonIncrementAsync = document.querySelector('#incrementoAsync');

buttonIncrement.addEventListener('click', () => {
  store.dispatch(incremento());
})
buttonDecrement.addEventListener('click', () => {
  store.dispatch(decremento());
})
buttonIncrementImpar.addEventListener('click', () => {
  const numero = store.getState().contador;
  if(!(numero % 2 === 0)) {
    store.dispatch(incremento());
  }
})
buttonDecrementAsync.addEventListener('click', () =>{
  setTimeout(()=>{
    store.dispatch(decremento());
  },1000)
})
buttonIncrementAsync.addEventListener('click', () =>{
  setTimeout(()=>{
    store.dispatch(incremento());
  },1000)
})