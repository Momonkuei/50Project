const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

jokeBtn.addEventListener("click", generateJoke);

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json',
        },
    }

    const res = fetch('https://icanhazdadjoke.com/', config);

    const data = await (await res).json();

    jokeEl.innerText = data.joke;
}