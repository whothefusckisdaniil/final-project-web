const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001; // Поменяйте на желаемый порт

app.use(bodyParser.json());
app.use(cors());

const users = []; // Простая база данных для примера

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Добавьте проверку наличия пользователя в базе данных
  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return res.status(400).json({ message: 'User with this email already exists' });
  }

  users.push({ username, email, password });
  res.json({ message: 'User registered successfully' });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
