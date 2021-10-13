const express = require('express');
const cabinetRouter = express.Router();
const ingredientController = require('../controllers/ingredientController');

cabinetRouter.get('/view', ingredientController.getIngredients, (req, res) => {
  return res.status(200).json(res.locals.ingredients);
});

cabinetRouter.post('/add', ingredientController.addIngredient, (req, res) => {
  return res.status(200).json(res.locals.addedIngredient);
});

cabinetRouter.post('/remove', ingredientController.removeIngredient, (req, res) => {
  return res.status(200).json(res.locals.removedIngredient);
});

module.exports = cabinetRouter;