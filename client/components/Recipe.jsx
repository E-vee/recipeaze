import React from 'react';
import axios from 'axios';

const Recipe = ({ name, img, id }) => {

  return (
    <div className="recipes" id={id}>
      <img src={img} className='recipe_img'/>
      {name}
      <button id="get_details_button" onClick={() => getDrinkDetails()}>Get Drink Details</button>
    </div>
  )


}


export default Recipe;
