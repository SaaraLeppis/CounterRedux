import './App.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import * as actionTypes from "./components/store/actions";

function App() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  //const [list, setList] = useState("circle");

  /*  useEffect(() => {
     setList(
       count % 2 === 0 ? "circle even"
         : count === 0 ? "circle"
           : "circle odd")
 
   }, [])// eslint-disable-line react-hooks/exhaustive-deps */

  const clickHandler = (e) => {
    console.log(count, "count");
    //console.log(list, "in clickhandler")
    const btnValue = e.target.className.toUpperCase();
    console.log(btnValue);
    dispatch({
      type: e.target.className.toUpperCase(),
    })
  }

  const removeOneHandler = (e) => {
    if (count >= 1) {
      dispatch({
        type: actionTypes.REMOVE_ONE
      })
    }
  }
  const removeFiveHandler = (e) => {
    if (count >= 5) {
      dispatch({
        type: actionTypes.REMOVE_FIVE
      })
    }
  }

  return (
    <div>
      <main>
        <div className={count === 0 ? "circle"
          : count % 2 === 0 ? "circle even"
            : "circle odd"}>
          <h1>{count}</h1>
        </div>
        <div className="buttons">
          <button className="add_one" onClick={clickHandler} >+  add  1 </button>
          <button className="add_five" onClick={clickHandler}>+ add 5</button>
          <button className="remove_one" onClick={removeOneHandler} >- REMOVE 1</button>
          <button className="remove_five" onClick={removeFiveHandler}>- Remove 5</button>
          <button className="reset" onClick={clickHandler} >Reset</button>
        </div>
      </main >
    </div >
  );
}

export default App;
