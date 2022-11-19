import { useState } from "react";
import "./App.css";
import Endgamecompo from "./components/endgame/endgamecompo.jsx";
import GamePage from "./components/gameco/gamePage.jsx";
import Home from "./components/homepage/home.jsx";

function App() {
  const [player, setPlayer] = useState({});
  const [computerDeck, setComputerdeck] = useState([]);
  const [playerDeck, setPlayerdeck] = useState([]);
  const [pages, setPages] = useState(0);

  const vallidName = (name) => {
    if (name.length > 0) {
      // update player name inside hook
      setPlayer({ fullName: name, win: 0, lose: 0 });
      setPages(1);
      // Start function that will create cards and ditribute them
      createDeck();
    } else {
      alert("error");
    }
  };
  // function creating card deck
  const createDeck = () => {
    let temp = [];
    for (let i = 1, cardValue = 1; i <= 52; i++) {
      temp.push(cardValue);
      if (i % 4 === 0) {
        cardValue++;
      }
    }
    let rnd;
    let conpDeck = [];
    let playDeck = [];
    for (let i = 0; i < 26; i++) {
      // sitributes cards to computer
      rnd = Math.floor(Math.random() * temp.length);
      conpDeck.push(temp[rnd]);
      temp.splice(rnd, 1);
      // distributes to player the cards
      rnd = Math.floor(Math.random() * temp.length);
      playDeck.push(temp[rnd]);
      temp.splice(rnd, 1);
    }
    setComputerdeck([...conpDeck]);
    setPlayerdeck([...playDeck]);
  };
// sends you to end game
  const finishGame = () => {
    setPages(2);
  };
// lets you exit to start game
  const hoGame = () => {
    setPages(0);
  };
  // lets you play again with the same name witout reseting everthing
  const again = () => {
    setPages(1);
  };

  //  function that switches pages by number
  const switchPages = () => {
    if (pages === 0) {
      return <Home valid={vallidName} />;
    } else if (pages === 1) {
      return (
        <GamePage
          finishGame={finishGame}
          computerDeck={computerDeck}
          playerDeck={playerDeck}
          playerName={player.fullName}
          setPlayer={setPlayer}
          player={player}
        />
      );
    } else if (pages === 2) {
      return (
        <Endgamecompo
          newDeck={createDeck}
          valid={hoGame}
          again={again}
          playerName={player.fullName}
          win={player.win}
          lose={player.lose}
        />
      );
    }
  };
  return <div className="App">{switchPages()}</div>;
}

export default App;
