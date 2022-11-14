import { useEffect, useState } from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import {usePlayerStore} from "../hooks/useStore";
// import { fetchImage } from "../helpers/fetchImage";
// import axios from "axios";

export default function useGame(props){

  const { endGame } = props;
  // const updateTime = usePlayerStore((state) => state.updateTime)
  const gameSolved = usePlayerStore((state) => state.gameSolved)
  const [image, setImage] = useState("/");

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function getNewImage() {
    let imageId = randomNumberInRange(1, 6);
    const imageUrl = "/image-bank/" + imageId + ".png"
    setImage(imageUrl)
  };

  function puzzleSolved() {
    gameSolved();
    endGame();
    // updateTime({gameTime: "04:00"});
  };

  useEffect(() => {
    getNewImage();
  }, []);

  console.log("response data: ", image);

  if (!image) return null
  //   <div>
  //     <button onClick={(e) => getNewImage(e)}>Get Image</button>
  //     {/* <button onClick={getNewImage()}>Get Image</button> */}
  //   </div>
  // );
    
  return (
    <JigsawPuzzle
      className="jigsaw-board"
      imageSrc={image}
      rows={4}
      columns={4}
      onSolved={() => puzzleSolved()}
    />
  )

}