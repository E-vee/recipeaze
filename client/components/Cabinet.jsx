import React, { useEffect, useState } from 'react';
import { Switch, Link, useHistory, Route, BrowserRouter as Router } from 'react-router-dom';
import Ingredient from './Ingredient';
import Recipe from './Recipe';
import axios from 'axios';

const Cabinet = ({ user }) => {
  const [ingredientsArray, setIngredientArray] = useState([]);
  const [recipesArray, setRecipeArray] = useState([]);

  useEffect(() => {
    grabIngredients();
  }, []);

  const grabIngredients = () => {
    axios({
      method: 'get',
      url: '/ingredients/view',
      params: {
        userID: user.id
      }
    })
    .then(response => {
      const ingredients = [];
      for (let i = 0; i < response.data.length; i += 1) {
        ingredients.push(<Ingredient name={response.data[i].name} id={response.data[i]._id} setIngredientArray={setIngredientArray}/>)
      }
      setIngredientArray(ingredients)
    })
    .catch(err => {
      console.log(err);
    });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault(); // Prevents page from refreshing
    const body = {
      userID: user.id,
      name: document.getElementById('ingredient').value,
      genre: 'drink'
    };
    axios({
      method: 'post',
      url: '/ingredients/add',
      data: body
    })
    .then(response => {
      setIngredientArray([...ingredientsArray, <Ingredient name={response.data[0].name} id={response.data[0]._id} setIngredientArray={setIngredientArray}/>])
      // setIngredientArray(prevState => {
      //   prevState.push(<Ingredient name={response.data[0].name} id={response.data[0]._id} setIngredientArray={setIngredientArray}/>);
      //   return prevState;
      // })
    })
    .catch(err => {
      console.log(err)
    });
  }

  const search = () => {
    let selectedIngredients = [];
    for (let i = 0; i < ingredientsArray.length; i++) {
      selectedIngredients.push(ingredientsArray[i].props.name);
    };
    axios({
      method: 'get',
      url: '/recipes/getDrinks',
      headers: {
        ingredients: selectedIngredients
      }
    })
    .then(response => {
      console.log(response.data)
      const recipes = [];
      if (response.data !== 'None Found') {
        for (let i =0; i < response.data.length; i += 1) {
          recipes.push(<Recipe name={response.data[i].strDrink} img={response.data[i].strDrinkThumb} id={response.data[i].idDrink}/>)
        }
      } else {
        alert('No recipes found!')
      }
      setRecipeArray(recipes)
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  return (
    <Router>
      <div id="cabinet_container">
        Cabinet
        <div id="ingredient_container">
           {ingredientsArray}
        </div>
        <div id="form_container">
          <form className="form" onSubmit={handleOnSubmit}>
            <input id="ingredient" type="text" placeholder="Please Enter Your Ingredient..."></input>
            <button id="add_ingredients" type="submit">Add to Cabinet!</button>
          </form>
          <button id='search_button' onClick={() => search()}>Search Recipes</button>
        </div>
        <div id="recipe_container"> 
          {recipesArray}
        </div>
      </div>
    </Router>
  )
}

export default Cabinet;
