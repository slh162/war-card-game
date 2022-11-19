import React from "react";
import "./endgame.css";

export default function Endgamecompo(props) {
  return (
    <div id="fgame">
      <button
      id="bu"
        onClick={() => {
          props.valid();
        }}
      >
        x
      </button>
      <h1>Win/Lose{props.index}</h1>
      <p>{props.win}-{props.lose}</p>
      <br />
      <button
        onClick={() => {
          props.again();
        }}
      >
        Again
      </button>
    </div>
  );
}
