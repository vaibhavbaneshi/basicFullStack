import express from 'express'

const app = express();

const port = 3000

app.get('/', (req, res) => {
    res.send("Server is ready")
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "first Joke",
            content: "This is the first joke"
        },
        {
            id: 2,
            title: "second Joke",
            content: "This is the second joke"
        },
        {
            id: 3,
            title: "third Joke",
            content: "This is the third joke"
        },
        {
            id: 4,
            title: "fourth Joke",
            content: "This is the fourth joke"
        },
        {
            id: 5,
            title: "fifth Joke",
            content: "This is the fifth joke"
        },
    ]
    res.send(jokes)
});

app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`);
});
