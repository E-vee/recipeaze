import React from 'react';
// Have a delete button per ingredient
import axios from 'axios';

const Ingredient = ({ name, id, setIngredientArray }) => {

  const deleteIngredient = () => {
    const body = {
      ingredientID: id
    };
    axios({
      method: 'post',
      url: '/ingredients/remove',
      data: body
    })
    .then(response => {
      let ingredients;
      setIngredientArray(prevState => {
        for (let i = 0; i < prevState.length; i += 1) {
          if (prevState[i].props.id === id) {
            prevState.splice(i, 1)
          }
        }
        ingredients = prevState;
        return prevState;
      })
      setIngredientArray([...ingredients]);
    })
    .catch(err => {
      console.log(err)
    });
  }

  return (
    <div className="ingredients" id={id}>
      <li>{name}</li>
      <button id="delete_ingredient" onClick={() => deleteIngredient()}>Delete</button>
    </div>
  )


}


export default Ingredient;
