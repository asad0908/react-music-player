import React from "react";
import LibrarySongs from "./LibrarySongs";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active__library" : ""}`}>
      <h2>Library</h2>
      <div className="library__songs">
        {songs.map((song) => (
          <LibrarySongs
            setSongs={setSongs}
            audioRef={audioRef}
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            key={song.id}
            id={song.id}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
