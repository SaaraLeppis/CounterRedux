import './App.css';
import React from 'react';

function App() {
  return (
    <div>
      <main>
        <div className="circles">
          <h1>{ }</h1>
        </div>
        <div className="buttons">
          <button className="add-one" >Add one </button>
          <button className="add-five" >Add five</button>
          <button className="remove-one" >Remove one</button>
          <button className="remove-five">Remove five</button>
          <button className="reset" >Reset</button>
        </div>
      </main >
    </div>
  );
}

export default App;
