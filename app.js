
const path = require('path')
const express = require('express')
const app = express()

const port = 3020

const root = path.join(__dirname, 'public')

const jokes = [
    {
        id: 1,
        joke: 'Why did the scarecrow win an award?',
        punchline: 'Because he was outstanding in his field.'
    },
    {
        id: 2,
        joke: 'What did the stupid dark room say to the smart lightbulb?',
        punchline: 'You are so bright.'
    },
    {
        id: 3,
        joke: 'What do you call a pillow with a lump?',
        punchline: 'An uncomfortable pillow.'
    },
    {
        id: 4,
        joke: 'What did the vampire say to the zombie?',
        punchline: 'You look very dead.'
    }
]

// allow sending of json
app.use(express.json())
// allow response to static webpages
app.use(express.static('public'))

// print clickable link to console
app.listen(port, () => console.log(`http://localhost:${port}`))


// index standard
app.get('/', (request, response) => {
    response.sendFile('index.hmtl', { root })
})

// random joke
app.get('/api/v1/random-joke', (request, response) => {
    const random = Math.floor(Math.random() * jokes.length)
    response.send(jokes[random])
})