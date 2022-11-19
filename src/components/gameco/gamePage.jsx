import React, { useState } from "react";
import Card from "../card/card";
import "./game.css";

export default function GamePage(props) {
  const [index, setIndex] = useState(0);
  const [playerPoint, setPlayerpoint] = useState(0);
  const [compPoint, setComppoint] = useState(0);
  // gets computer deck from card component
  const sendCardToCOMPUTER = () => {
    return props.computerDeck[index];
  };
  // gets player deck from card component
  const sendCardToPlayer = () => {
    return props.playerDeck[index];
  };

  

  const incIndex = () => {
    let p = playerPoint;
    let c = compPoint;
    // counts points for the particepents
    if (props.computerDeck[index] > props.playerDeck[index]) {
      c++;
      setComppoint(c);
    } else if (props.playerDeck[index] > props.computerDeck[index]) {
      p++;
      setPlayerpoint(p);
    }
    setIndex(index+1);
// when game hits indexs 25 checks who won and sends to end game component
    if (index === 25) {
    if (playerPoint > compPoint) {
      props.setPlayer({...props.player,win: props.player.win+1})
     props.finishGame();
    }
    else if (playerPoint < compPoint) {
      props.setPlayer({...props.player, lose: props.player.lose+1})
     props.finishGame();
    }

    }
  };
  return (
    <div id="game">
      <h2 class="ind" id="com">Computer</h2>
      <div class="points">
        <span> Score:</span>
        <br />
        <span>Com- {compPoint}</span>
        <br />
        <span>{props.playerName}- {playerPoint}</span>
      </div>
      <h2 class="ind">N.O {index}</h2>
      <div class="card">
        <Card cardValue={sendCardToCOMPUTER} />
      </div>
      <br />
      
      <div class="card">
        <Card cardValue={sendCardToPlayer} />
      </div>
<h1 class="points" id="pla">{props.playerName}</h1>
      <br />
          <button onClick={incIndex}>
        Next
      </button>
    </div>
  );
}
