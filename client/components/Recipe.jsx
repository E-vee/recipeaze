import React from 'react';
import axios from 'axios';

const Recipe = ({ name, img, id }) => {

  return (
    <div className="recipe" id={id}>
      <img src={img} className='recipe_img'/>
      {name}
      <button id="get_details_button" onClick={() => getDrinkDetails()}>Get Drink Details</button>
      <div className="recipe_details">
        <div className="ingredients_section">

        </div>
        <div className="instructions_section">

        </div>
      </div>
    </div>
  )


}


export default Recipe;
