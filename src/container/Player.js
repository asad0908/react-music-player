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
  return (
    <div className="player">
      <div className="time__control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          onChange={dragHandler}
          type="range"
          min={0}
          max={songInfo.duration !== NaN ? songInfo.duration : 0}
          value={songInfo.currentTime}
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play__control">
        <FontAwesomeIcon
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
          size="2x"
          className="play__controlSkipFront"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
