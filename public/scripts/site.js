

(async () => {

const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')


const getJoke =  async () => {
    const result = await fetch('/api/v1/random-joke')
    const { joke, punchline } = await result.json()
    h2.textContent = joke
    h3.textContent = punchline
}

document.getElementById('joke-button').addEventListener("click", getJoke)

})()

