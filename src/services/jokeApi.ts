import { Joke } from "../types/Interfaces";

export async function getRandomJoke(){
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const joke: Joke = await response.json();
        console.log(joke);
        return joke;

    } catch (error) {
        console.log(error);
        return null;
    }
}
