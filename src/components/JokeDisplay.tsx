import { useState } from "react";
import { Joke } from "../types/interfaces";
import Button from "./Button";

interface JokeProps {
    joke: Joke;
}

function JokeDisplay({joke}: JokeProps) {

  const [showPunchline, setShowPunchline] = useState(false);
  const [num, setNum] = useState<number>(Math.floor(Math.random() * 6) + 1);

  const revealPunchline = () => {
    if (!showPunchline) {
      setShowPunchline(true);
    }
      setNum(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div>
      <h3>{joke.setup}</h3>
      <Button text="Reveal Punchline" onClickHandler={revealPunchline} />
        {showPunchline && (
          <div>
            <p>{joke.punchline}</p>
            <img src={`img/lol${num}.gif`} alt="Gif" />
          </div>
        )}
    </div>
  )
}

export default JokeDisplay
