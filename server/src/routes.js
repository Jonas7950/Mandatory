module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.get('/', async (req, res) => {
    const movies = await db.getMovies();
    res.json(movies);
  });

  router.get('/:id', async(req, res) => {
    const id = req.params.id;
    const movie = await db.getMovies(id);
    res.json(movie);
  });

  router.post('/', async (req, res) => {
    const movie = {
      title: req.body.name,
      description: [] // Empty hobby array
    };
    const newMovie = await db.createMovie(movie);
    res.json(newMovie);
  });

  router.post('/:id/hobbies', async (req, res) => {
    const updatedKitten = await db.addHobby(req.params.id, req.body.hobby);
    console.log("updatedKitten", updatedKitten);
    res.json(updatedKitten);
  });

  return router;
};
