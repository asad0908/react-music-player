import React, { useState } from "react";
import Player from "./container/Player";
import Song from "./container/Song";
import "./styles/app.scss";
import data from "./util";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song current={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        current={currentSong}
      />
    </div>
  );
}

export default App;
