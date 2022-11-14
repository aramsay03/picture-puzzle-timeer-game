import { useState } from 'react';
import './App.css';
import Game from "./hooks/useGame";
import Stopwatch from "./hooks/useStopwatch";
import {usePlayerStore} from "./hooks/useStore";
// import Leaderboard from "./hooks/useLeaderBoard";
import Board from "./components/board";
import Form from "./components/form";

function App() {

  const player = usePlayerStore((state) => state)
  // const resetPlayer = usePlayerStore((state) => state.resetPlayer)
  const [gameOn, setGameOn] = useState(false);
  const [newHighScore, setNewHighScore] = useState(false);
  const [noLuckThisTime, setNoLuckThisTime] = useState(false);
  // const [resetStopwatch, setResetStopwatch] = useState(false);

  // const players = [];

  function endGame() {
    console.log("Game result: ", player)
    // checks if new high score
    // if new high score
    // - sets new high score to true
    // - store data to db
    // SaveToDB();
    // - sends data to Slack
  }

  function resetGame() {
    console.log("Game result: ", player)
    // resets game and clears store and fetches leaderboard
    // setResetStopwatch(true);
    player.resetPlayer();
    setGameOn(false);
    setNewHighScore(false);
    setNoLuckThisTime(false);
    // setResetStopwatch(false);
  }

  // const Game = () => {
  //   useGame()
  // }

  return (
    <div className="App">
      <header className="App-header">
        MI:RNA Daily LVS Competition
      </header>
      <main className="App-main">
        <section className="App-main-left">
          <div className="Game-area">
            {!gameOn ? <Form setGameOn={setGameOn} /> : <Game endGame={endGame} />}
          </div>
        </section>
        <section className="App-main-right">
          <Stopwatch gameOn={gameOn} />
          <div>
            <Board />
          </div>
          <button type="submit" onClick={() => resetGame()}>Reset Details Test</button>
          Name {player.name}
          Phone {player.phone}
          Email {player.email}
          Newsletter {player.newsletter}
          Game Time {player.gameTime}
        </section>
      </main>
    </div>
  );
}

export default App;
