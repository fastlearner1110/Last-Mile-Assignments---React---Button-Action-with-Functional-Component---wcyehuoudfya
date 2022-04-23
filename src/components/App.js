import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let [text,setText]=useState("");
  function handleClick(){
     setText("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  }
  return (
    <div id="main">
      // Do not alter the main div
    {para && <p id="para">{text}</p>}
      <button onClick={handleClick} id="click">Click</button>
    </div>
  );
}


export default App;
