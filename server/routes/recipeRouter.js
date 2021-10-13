const express = require('express');
const recipeRouter = express.Router();
const recipeController = require('../controllers/recipeController');

// Returns list of drinks to client
  // Includes name, picture, and id
recipeRouter.get('/getDrinks', recipeController.getDrinks, (req, res) => {
  return res.status(200).json(res.locals.drinks);
});

// Return drink details to client
  // Includes ingredient names and amounts, as well as instructions.  
recipeRouter.get('/getDrinkDetails', recipeController.getDrinkDetails, (req, res) => {
  return res.status(200).json(res.locals.drinkData);
})

module.exports = recipeRouter;