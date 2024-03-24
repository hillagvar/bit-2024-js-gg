async function loadJoke() {
    // console.log("Parsiuntimas prasidejo");
    const tmp = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const joke = await tmp.json();

    // ...
    console.log(`Category: ${joke.category}`);
    console.log(`Joke: ${joke.joke}`);
    // console.log("Parsiuntimas baigtas");
}

// console.log("Pirma instrukcija");
loadJoke();
// console.log("Programa baigta");