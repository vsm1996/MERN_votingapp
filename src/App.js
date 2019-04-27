import React from "react";
import Options from "./components/Options";
import "./App.css";

function App() {
  return (
    <div className="">
      <Options opts={["React", "Vue", "Angular", "Ember"]} />
    </div>
  );
}

export default App;
