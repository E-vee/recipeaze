import React from 'react';
import { Switch, Link, useHistory, Route, BrowserRouter as Router } from 'react-router-dom';
import Ingredient from './Ingredient';
import axios from 'axios';

const Cabinet = () => {
  let history = useHistory();
  const ingredientArray = [<Ingredient name="test" id='1' />];

  const handleRenderIngredients = () => {
    // Invoked on:
    // Login || Interval || Helper function ?
  }
  const handleOnSubmit = (e) => {
    e.preventDefault(); // Prevents page from refreshing
    const body = {
      // account_id: userID,
      ingredient_name: document.getElementById('ingredient').value
    }
    axios({
      method: 'post',
      url: '/Add',
      data: body
    }).
      console.log('Your ingredient is :', body.ingredient_name);
  }

  return (
    <Router>
      <div id="cabinet_container">
        cabinet
        <div id="form_container">
          <form className="form" onSubmit={handleOnSubmit}>
            <input id="ingredient" type="text" placeholder="Please Enter Your Ingredient"></input>
            <button id="add_ingredients" type="submit">Add Your Ingredients
            </button>
          </form>
        </div>
        <div id="ingredient_list">
          <ul>
            <Ingredient name="limes" id='1' />
            {ingredientArray}
          </ul>
        </div>
      </div>
    </Router>
  )
}

export default Cabinet;
