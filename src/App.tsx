import './App.css'
import Button from './components/Button'
import Header from './components/Header'
import { Joke } from './types/interfaces'
import { useState } from 'react'
import { getRandomJoke } from './services/jokeApi'
import JokeDisplay from './components/JokeDisplay'

function App() {

  const [joke, setJoke] = useState<Joke | null>(null);

  const onClickHandler = () => {
    getRandomJoke().then((newJoke: Joke | null) => {
      setJoke(newJoke);
    });
  }

  return (
    <div className='app'>
      <Header />
      <Button 
        text = "Get a joke"
        onClickHandler={onClickHandler} 
      />
      {joke && <JokeDisplay joke={joke} />}
    </div>
  )
}

export default App
