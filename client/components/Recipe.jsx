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
        setRecipe(data);
        console.log('Update Recipe State', recipe)
      })
      .catch((err) => {
        console.log('Error: ', err);
      })
  }

  return (
    <div className="recipes" id={id}>
      <img src={img} className='recipe_img' />
      {name}
      <button id="get_details_button" onClick={(e) => getDrinkDetails(e)}>
        Get Drink Details</button>
      {/* Here for the new component, CSS it to the right later */}
      <Details recipe={recipe} />
    </div>
  )
}


export default Recipe;
