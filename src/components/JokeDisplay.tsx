import { useState } from "react";
import { Joke } from "../types/Interfaces";
import Button from "./Button";

interface JokeProps {
    joke: Joke;
}

function JokeDisplay({joke}: JokeProps) {
  
  const [showPunchline, setShowPunchline] = useState(false);

  return (
    <div>
      <h3>{joke.setup}</h3>
        {!showPunchline ? ( //if showPunchline is not show
          <Button text="Reveal Punchline" onClickHandler={() => setShowPunchline(true)} />
        ) : ( //else
          <p>{joke.punchline}</p>
        )}
    </div>
  )
}

export default JokeDisplay
