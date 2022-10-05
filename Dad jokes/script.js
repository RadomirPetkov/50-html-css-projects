const jokeElement = document.getElementById(`joke`)
const button = document.getElementById('jokeBtn')

loadJoke()

button.addEventListener('click', loadJoke)

async function loadJoke() {
    const config = {
        headers: {
            "Accept": "application/json"
        }
    }
    const res = await fetch('https://icanhazdadjoke.com/', config)
    const data = await res.json()
    const joke = data.joke
    console.log(joke);

    jokeElement.textContent = joke

}