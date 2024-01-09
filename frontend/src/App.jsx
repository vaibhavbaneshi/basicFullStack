import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
// import cors from 'cors' 

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  })

  return (
    <>
      <h1>Listen Jokes here</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke) => (
          <p key={joke.id}>
            <h3>Joke title: {joke.title}</h3>
            <p>Joke content: {joke.content}</p>
          </p>
        ))
      }
    </>
  )
}

export default App

