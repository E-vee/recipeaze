import React, { useEffect, useState } from 'react';
import { Switch, Link, useHistory, Route, BrowserRouter as Router } from 'react-router-dom';
import Ingredient from './Ingredient';
import axios from 'axios';

const Cabinet = ({ user }) => {
  console.log(user)
  console.log('id is: ', user.id)
  const [ingredientsArray, setIngredientArray] = useState([]);

  useEffect(() => {
    grabIngredients();
  }, ingredients);

  // const toggleSelect = (e) => {
  //   console.log(e);
  // }
  // let selected = selected? false : true;

  const grabIngredients = () => {
    axios({
      method: 'get',
      url: '/ingredients/view',
      params: {
        userID: user.id
      }
    })
      .then(response => {
        let ingredients = [];
        for (let i = 0; i < response.data.length; i += 1) {
          ingredients.push(<Ingredient name={response.data[i].name} id={response.data[i]._id} selected={false} />)
        }
        console.log(ingredients)
        setIngredientArray(ingredients)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const handleOnSubmit = (e) => {
    e.preventDefault(); // Prevents page from refreshing
    const body = {
      userID: user.id,
      name: document.getElementById('ingredient').value,
      genre: 'drink'
    };
    console.log('body', body)
    axios({
      method: 'post',
      url: '/ingredients/add',
      data: body
    })
      .then(response => {
        console.log(response.data[0])
        // let ingredients = ingredientsArray.slice();
        // ingredients.push(response.data[0]);
        setIngredientArray(prevState => {
          console.log(prevState);
          prevState.push(<Ingredient name={response.data[0].name} id={response.data[0]._id} selected={false} />)
        });
      });
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
            {ingredientsArray}
          </ul>
        </div>
      </div>
    </Router>
  )
}

export default Cabinet;
