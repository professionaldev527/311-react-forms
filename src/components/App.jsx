import React from "react";
import { useState } from "react";

function App() {
  const [name,setName] = useState("");
  const [text, setText] = useState("");

  function handleChange() {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick() {
    setText(name);
  }

  return (
    <div className="container">
      <h1>Hello {text}</h1>
      <input
      onChange={handleChange} 
      type="text" 
      placeholder="What's your name?"
      value={name}
      />
      <button
      onClick={handleClick}
      >Submit</button>
    </div>
  );
}

export default App;
