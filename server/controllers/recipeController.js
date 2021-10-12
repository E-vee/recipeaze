const axios = require('axios');

const recipeController = {};

recipeController.getDrinks = (req, res, next) => {
  try {
    const ingredients = req.params.ingredients;
    let cocktailAPI = 'www.thecocktaildb.com/api/json/v1/1/filter.php?i='
    for (let i = 0; i < ingredients.length; i += 1) {
      ingredients[i].replace(' ', '_');
      cocktailAPI += ingredients[i];
      if (i !== ingredients.length - 1) {
        cocktailAPI += ',';
      }
    }
    axios.get(cocktailAPI)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      res.locals.drinks = data.rows;
      return next();
    })
  }
  catch(err) {
    return next({
      log: `ERROR occurred in recipeController.getDrinks`, 
      message: {
        err: 'ERROR occurred in recipeController.getDrinks => Check server logs for details'
      },
    });
  };
};

recipeController.getDrinkDetails = (req, res, next) => {
  try {
    const ingredientID = req.params.ingredientID;
    let cocktailAPI = `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ingredientID}`
    axios.get(cocktailAPI)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      res.locals.drinkData = data.rows;
      return next();
    })
  }
  catch(err) {
    return next({
      log: `ERROR occurred in recipeController.getDrinkDetails`, 
      message: {
        err: 'ERROR occurred in recipeController.getDrinkDetails => Check server logs for details'
      },
    });
  };
};

module.exports = recipeController;