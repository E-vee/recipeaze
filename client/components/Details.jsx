import React from "react";

const Details = (recipe) => {
  if (recipe.strInstructions) {
    return (
      <div>
        <p>{recipe.strInstructions}</p>
      </div>
    )
  } else {
    return null;
  }
}

export default Details;
