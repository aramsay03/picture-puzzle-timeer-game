import React, { useState, useEffect } from "react";
import {usePlayerStore} from "./useStore";

const Stopwatch = (props) => {
  const { gameOn, resetStopwatch } = props;
  const solved = usePlayerStore((state) => state.solved)
  const updateTime = usePlayerStore((state) => state.updateTime)
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  // useEffect(() => {
  //   if (resetStopwatch) setTime(0);
  // }, [resetStopwatch])
  

  useEffect(() => {
    if (gameOn && !solved) setRunning(true);
  
    if (solved) {
      setRunning(false);
      updateTime(time);
      setTime(0);
    };

    // if (resetStopwatch) setTime(0);

  }, [gameOn, solved])
  
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>       
      </div>
    </div>
  );
};

export default Stopwatch;
