import React from "react";
import Player from "./container/Player";
import Song from "./container/Song";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
