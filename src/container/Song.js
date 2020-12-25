import React from "react";

const Song = ({ current }) => {
  return (
    <div className="song__container">
      <div className="img__container">
        <img src={current.cover} alt="cover" />
      </div>
      <h2>{current.name}</h2>
      <h3>{current.artist}</h3>
    </div>
  );
};

export default Song;
