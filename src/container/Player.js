import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  current,
  isPlaying,
  setIsPlaying,
  audioRef,
  setSongInfo,
  songInfo,
  songs,
  setSongs,
  setCurrentSong,
}) => {
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const playHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === current.id);
    if (direction === "skip-front") {
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    } else {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
      } else {
        await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
      }
    }
    if (isPlaying) audioRef.current.play();
  };

  const trackAnum = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };

  return (
    <div className="player">
      <div className="time__control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${current.color[0]}, ${current.color[1]})`,
          }}
          className="track"
        >
          <input
            onChange={dragHandler}
            type="range"
            min={0}
            max={songInfo.duration}
            value={songInfo.currentTime}
          />
          <div style={trackAnum} className="animate__track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play__control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          size="2x"
          className="play__controlSkipBack"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          size="2x"
          onClick={playHandler}
          className="play__controlPlay"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-front")}
          size="2x"
          className="play__controlSkipFront"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
