import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
const Player = () => {
  return (
    <div className="player">
      <div className="time__control">
        <p>start time</p>
        <input type="range" />
        <p>End time</p>
      </div>
      <div className="play__control">
        <FontAwesomeIcon
          size="2x"
          className="play__controlSkipBack"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          size="2x"
          className="play__controlPlay"
          icon={faPlay}
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
