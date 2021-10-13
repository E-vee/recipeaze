import React from 'react';
// Have a delete button per ingredient

const Ingredient = ({ name, id, selected }) => {

  // const handleOnDelete = (id) => {

  // }
  const toggle = () => {
    console.log("before", selected)
    selected = !selected;
    console.log("after", selected)
  }
  return (
    <div className="ingredients">
      <li id={id}>{name}</li>
      <button id="delete_ingredient">Delete</button>
      <button id='select' onClick={() => toggle()}>Toggle</button>
    </div>
  )


}


export default Ingredient;
