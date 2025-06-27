const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
const authRoutes = require('./routes/auth');
const gamesRoutes = require('./routes/games');

app.use('/api/auth', authRoutes);
app.use('/api/games', gamesRoutes);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
