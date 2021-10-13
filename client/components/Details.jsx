import React from "react";

const Details = (recipe) => {
  if (recipe.strInstructions) {
    return (

      <p>{recipe.strInstructions}</p>

    )
  }
}

export default Details;
