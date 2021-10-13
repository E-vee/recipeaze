const db = require('../models/recipeazeModel');

const ingredientController = {};

ingredientController.getIngredients = (req, res, next) => {
  const userID = req.query.userID;
  console.log('userID is: ', userID)
  const ingredientQuery = `
    SELECT name, _id
    FROM ingredients
    WHERE user_id = ${userID}
  `;
  db.query(ingredientQuery)
    .then((data) => {
      res.locals.ingredients = data.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: `ERROR occurred in ingredientController.getIngredients`,
        message: {
          err: `ERROR occurred in ingredientController.getIngredients => ${err}`
        },
      })
    })
};

ingredientController.addIngredient = (req, res, next) => {
  try {
    console.log(req.body)
    const name = req.body.name;
    const userID = req.body.userID;
    const genre = req.body.genre;
    const ingredientAddQuery = `
      INSERT INTO ingredients
      (name, genre, user_id)
      VALUES
      ('${name}', '${genre}', ${userID})
      RETURNING name, _id
    `;
    db.query(ingredientAddQuery)
      .then((data) => {
        res.locals.addedIngredient = data.rows;
        return next();
      });
  }
  catch (err) {
    return next({
      log: `ERROR occurred in ingredientController.addIngredient`,
      message: {
        err: 'ERROR occurred in ingredientController.addIngredient => Check server logs for details'
      },
    });
  };
};

ingredientController.removeIngredient = (req, res, next) => {
  try {
    const ingredientID = req.body.ingredientID;
    const ingredientRemoveQuery = `
      DELETE FROM ingredients
      WHERE _id = ${ingredientID}
      RETURNING name, _id
    `;
    db.query(ingredientRemoveQuery)
      .then((data) => {
        res.locals.removedIngredient = data.rows;
        return next();
      });
  }
  catch (err) {
    return next({
      log: `ERROR occurred in ingredientController.removeIngredient`,
      message: {
        err: 'ERROR occurred in ingredientController.removeIngredient => Check server logs for details'
      },
    });
  };
};

module.exports = ingredientController;