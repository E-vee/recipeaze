const express = require('express');
const recipeRouter = express.Router();
const recipeController = require('../controllers/ingredientController');

recipeRouter.get('/getDrinks', recipeController.getDrinks, (req, res) => {
  return res.status(200).json(res.locals.drinks);
});

recipeRouter.get('/getDrinkDetails', recipeController.getDrinkDetails, (req, res) => {
  return res.status(200).json(res.locals.drinks);
})

recipeRouter.get('/getFood', recipeController.findFood, (req, res) => {
  return res.status(200).json(res.locals);
});

module.exports = recipeRouter;