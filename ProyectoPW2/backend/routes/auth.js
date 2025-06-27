const express = require('express');
const router = express.Router();

// Simulamos una "base de datos"
let users = [];

// POST /api/auth/register
router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Faltan datos' });
  }

  // Verificamos si el usuario ya existe
  const exists = users.find(u => u.email === email);
  if (exists) {
    return res.status(409).json({ message: 'El usuario ya existe' });
  }

  users.push({ username, email, password });
  res.status(201).json({ message: 'Usuario registrado exitosamente' });
});

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  res.json({ message: 'Inicio de sesión exitoso', user });
});

// POST /api/auth/forgot-password
router.post('/forgot-password', (req, res) => {
  const { email } = req.body;
  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(404).json({ message: 'Correo no registrado' });
  }

  // Aquí iría lógica real de recuperación
  res.json({ message: 'Se ha enviado un correo de recuperación (simulado)' });
});

module.exports = router;
