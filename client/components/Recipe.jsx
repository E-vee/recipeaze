import React, { useState } from 'react';
import axios from 'axios';
import Details from './Details';

const Recipe = ({ name, img, id }) => {
  const [recipe, setRecipe] = useState({});
  const getDrinkDetails = (e) => {
    let target = e.target.parentNode.id;
    console.log(e.target.parentNode.id);
    axios({
      method: 'get',
      url: '/recipes/getDrinkDetails',
      params: {
        ingredientID: target
      }
    })
      .then(data => {
        console.log('Data from front end', data);
        const instructions = document.createElement('p')
        const text = document.createTextNode(data.data[0].strInstructions);
        instructions.style.fontSize = "small"
        instructions.appendChild(text);
        const instructionsDiv = document.getElementById(id).childNodes[2].childNodes[1];
        const ingredientsDiv = document.getElementById(id).childNodes[2].childNodes[0];
        ingredientsDiv.style.fontSize = "small";
        ingredientsDiv.style.textAlign = "left";
        console.log(ingredientsDiv)
        instructionsDiv.appendChild(instructions);
        const detailButton = document.getElementById(id).childNodes[3];
        detailButton.style.display = 'none';
        for (let i = 0; i < 16; i++) {
          if (data.data[0][('strIngredient' + i)]) {
            console.log('hello')
            const li = document.createElement('li');
            li.innerHTML = data.data[0][("strMeasure" + i)] + (' of ') + data.data[0][('strIngredient' + i)];
            ingredientsDiv.appendChild(li);

          }
        }
      })
      .catch((err) => {
        console.log('Error: ', err);
      })
  }

  return (
    <div className="recipe" id={id}>
      <img src={img} className='recipe_img' />
      {name}
      <div className="recipe_details">
        <div className="ingredients_section">

        </div>
        <div className="instructions_section" id="inst">

        </div>
      </div>
      <button id="get_details_button" onClick={(e) => getDrinkDetails(e)}>Get Drink Details</button>
    </div>
  )
}


export default Recipe;
