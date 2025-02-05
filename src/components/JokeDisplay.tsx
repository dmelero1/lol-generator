import { Joke } from "../types/Interfaces";

interface JokeProps {
    joke: Joke;
}

function JokeDisplay({joke}: JokeProps) {
  return (
    <div>
        <p>{joke.setup}</p>

    </div>
  )
}

export default JokeDisplay
