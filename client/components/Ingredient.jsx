import React from 'react';
// Have a delete button per ingredient

const Ingredient = ({ name, id }) => {

  // const handleOnDelete = (id) => {

  // }

  return (
    <div className="ingredients">
      <li id={id}>{name}</li>
      <button id="delete_ingredient">Delete</button>
    </div>
  )


}


export default Ingredient;
