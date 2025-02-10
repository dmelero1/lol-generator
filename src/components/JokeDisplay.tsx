import { useState } from "react";
import { Joke } from "../types/interfaces";
import Button from "./Button";

interface JokeProps {
    joke: Joke;
}

function JokeDisplay({joke}: JokeProps) {
  
  const [showPunchline, setShowPunchline] = useState(false);
  const num = Math.round(Math.random() * 6)

  return (
    <div>
      <h3>{joke.setup}</h3>
        {!showPunchline ? ( //if showPunchline is not show
          <Button text="Reveal Punchline" onClickHandler={() => setShowPunchline(true)} />
        ) : ( //else
          <div>
            <img src={`img/lol${num}.gif`} alt="Gif" />
            <p>{joke.punchline}</p>
          </div>
        )}
    </div>
  )
}

export default JokeDisplay
