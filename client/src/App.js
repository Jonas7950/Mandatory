import React, {useEffect, useState} from 'react';
import {Router} from "@reach/router";
import Movie from './Movie.js';
const API_URL = process.env.REACT_APP_API;

function App() {
  const [movies, setMovies] = useState([Movie]);

  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/movies`;
      const response = await fetch(url);
      const movies = await response.json();
        console.log(movies);
        setMovies(movies);
    }
    getData();
  }, []);

  function getMovie(id) {
    if (movies !== undefined){
      console.log("questions exists")
      const movie = movies.find(element => element.id === parseInt(id));
      console.log(movie);
      return movie;
    }
  }

  return (
      <>
        <h1>Movies that exists</h1>
          <Router>
              <Movie path="/movie/:id" getMovie={getMovie}/>
          </Router>
      </>
  );
}

export default App;
