const axios = require('axios');

const recipeController = {};

recipeController.getDrinks = (req, res, next) => {
  const ingredients = req.headers.ingredients.split(',');
  console.log('in getDrinks controller method', typeof ingredients, ingredients)
  let cocktailAPI = 'http://thecocktaildb.com/api/json/v2/9973533/filter.php?i='
  for (let i = 0; i < ingredients.length; i += 1) {
    ingredients[i].replace(' ', '_');
    cocktailAPI += ingredients[i];
    if (i !== ingredients.length - 1) {
      cocktailAPI += ',';
    }
  }
  console.log('checking API endpoint', cocktailAPI);
  axios({
    method: 'get',
    url: cocktailAPI,
  })
    .then(data => {
      res.locals.drinks = data.data.drinks;
      return next();
    })
    .catch(err => {
      return next({
        log: `ERROR occurred in recipeController.getDrinks`,
        message: {
          err: 'ERROR occurred in recipeController.getDrinks => Check server logs for details'
        },
      });
    })
};

recipeController.getDrinkDetails = (req, res, next) => {
  try {
    // console.group('GetDrinkDetails')
    // console.log('here is the request ', req);
    const ingredientID = req.query.ingredientID;
    console.log('Here is our ingredientID', ingredientID);
    let cocktailAPI = `http://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${ingredientID}`
    axios.get(cocktailAPI)
      .then(data => {
        console.log('Returned data for drink recipes', data.data.drinks)
        res.locals.drinkData = data.data.drinks;
        return next();
      })
      .catch((err) => {
        console.log('Error: ', err)
      })
  }
  catch (err) {
    return next({
      log: `ERROR occurred in recipeController.getDrinkDetails`,
      message: {
        err: 'ERROR occurred in recipeController.getDrinkDetails => Check server logs for details'
      },
    });
  };
};

module.exports = recipeController;