import React, { useState } from 'react';
import GameBoard from "../hooks/useGame";
import Stopwatch from '../hooks/useStopwatch';

export default function game() {

    // const [gamePlaying, setGamePlaying] = useState(false)

    function startGame() {
        // setGamePlaying(true);
        Stopwatch.setRunning(true);
    }

    const PlayButton = () => {
        return (
            <div>
                <button onClick={(e) => startGame()}>Start</button>
            </div>
        )
    }
    return (
        <div>
            {/* {gamePlaying} */}
            <GameBoard />
        </div>
    )
}
