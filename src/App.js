import './App.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

// import * as actionTypes from "./components/store/actions";

function App() {
  const count = useSelector((state) => state.counter)
  console.log("count", count);
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    console.log("+1 clicked");
    const btnValue = e.target.className.toUpperCase();
    console.log(btnValue);
    dispatch({
      type: btnValue,
    })
  }


  return (
    <div>
      <main>
        <div className="circle">
          <h1>{count}</h1>
        </div>
        <div className="buttons">
          <button className="add_one" onClick={clickHandler} >Add one </button>
          <button className="add_five" onClick={clickHandler}>Add five</button>
          <button className="remove_one" onClick={clickHandler} >Remove one</button>
          <button className="remove_five" onClick={clickHandler}>Remove five</button>
          <button className="reset" onClick={clickHandler} >Reset</button>
        </div>
      </main >
    </div>
  );
}

export default App;
