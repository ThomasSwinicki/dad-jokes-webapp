import express from 'express';
import cors from 'cors';
import { jokes } from './jokes.js';

const app = express();
const PORT = process.env['PORT'] || 3000;

app.use(cors());
app.use(express.json());

// GET /random/joke - Returns a random joke
app.get('/random/joke', (_req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const joke = jokes[randomIndex];

  res.json({
    success: true,
    body: [joke]
  });
});

// GET /joke/:id - Returns a specific joke by ID
app.get('/joke/:id', (req, res) => {
  const joke = jokes.find(j => j._id === req.params['id']);

  if (!joke) {
    res.status(404).json({
      success: false,
      message: 'Joke not found'
    });
    return;
  }

  res.json({
    success: true,
    body: [joke]
  });
});

// GET /jokes - Returns all jokes
app.get('/jokes', (_req, res) => {
  res.json({
    success: true,
    body: jokes
  });
});

// Health check endpoint
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Dad Jokes API running at http://localhost:${PORT}`);
  console.log(`Try: http://localhost:${PORT}/random/joke`);
});
