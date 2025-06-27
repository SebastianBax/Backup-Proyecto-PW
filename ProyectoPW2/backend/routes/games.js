const express = require('express');
const router = express.Router();

const games = [
  { id: 1, title: 'Zelda', genre: 'Adventure' },
  { id: 2, title: 'Mario Kart', genre: 'Racing' },
  { id: 3, title: 'Minecraft', genre: 'Sandbox' },
  { id: 4, title: 'FIFA 23', genre: 'Sports' },
  { id: 5, title: 'Halo', genre: 'Shooter' }
];

// GET /api/games
router.get('/', (req, res) => {
  const { genre } = req.query;

  if (genre) {
    const filteredGames = games.filter(game =>
      game.genre.toLowerCase() === genre.toLowerCase()
    );
    return res.json(filteredGames);
  }

  res.json(games);
});

module.exports = router;
