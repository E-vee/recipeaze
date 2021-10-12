const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cabinetRouter = require('./routes/cabinetRouter');
const recipeRouter = require('./routes/recipeRouter');
const authRouter = require('./routes/authRouter');

const PORT = 3000;
const app = express();

dotenv.config();

// Parse JSON
app.use(express.json());

// Serve static assets from assets directory
app.use(express.static(path.resolve(__dirname, '../assets')));

// Route to view current cabinet contents
  // Request should include userID
  // Response should return all ingredient names and ids where user_id is current user
app.get('/ingredients', cabinetRouter);

// Route to add ingredient to cabinet
  // Request should include ingredient name, user_id, and type
  // Response should include added ingredient
app.post('/ingredients', cabinetRouter);

// Route to remove ingredient to cabinet
  // Request should include ingredient id
  // Response should include removed ingredient
app.post('/ingredients', cabinetRouter);

// Route to search for recipe with ingredients selected
  // Request should include ingredient names
  // Response should include recipe names, pictures, and ids
  // Response should
app.post('/recipes', recipeRouter);

// Route to receive access token from Google
app.get('/auth', authRouter);

// Route to receive user info from Google using access token
app.get('/auth', authRouter);

// Route to serve bundled assets in production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../dist')));
};

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));












