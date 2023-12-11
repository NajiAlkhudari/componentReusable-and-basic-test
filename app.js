
import express from 'express';

const app = express();

// Simulated data fetching function
const fetchData = () => {
  return Promise.resolve('peanut butter');
};

// Endpoint for testing
app.get('/test-endpoint', (req, res) => {
  fetchData()
    .then((data) => {
      res.json({ data });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
