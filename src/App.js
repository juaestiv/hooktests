import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';

//en mi explicacion esto es como si fuera una clase. Está fuera
//de la función. Como un import. 
// Luego en la función la instanciaremos
const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state -1;
    case 'reset': return 0;
    default: throw new Error('Unexpected action');
  }
};


function App() {
  //como si instanciaramos el reducer

  const [contador, dispatch] = useReducer(reducer,initialState);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Muestra el contador */}
        {contador}
        
        {/* /ahora usamos la instancia */}
        <button onClick={()=>dispatch('increment')}>+1</button>
        <button onClick={()=>dispatch('decrement')}>-1</button>
        <button onClick={()=>dispatch('reset')}>reset</button>
      </header>
    </div>
  );
}

export default App;
