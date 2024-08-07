import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import cors from 'cors';
import routes from './routes/index';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Load routes
app.use(routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
