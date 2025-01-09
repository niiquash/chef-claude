import React from "react";

const IngredientsList = (props) => {
  const ingredientsList = props.ingredients.map((ingredient, key) => (
    <li key={key} className="ingredients--list__item">
      {ingredient}
    </li>
  ));

  return (
    <section className="ingredients">
      <h2 className="ingredients--heading">Ingredients on hand:</h2>
      <ul className="ingredients--list">{ingredientsList}</ul>
      {props.ingredients.length > 3 && (
        <section className="get-recipe">
          <div>
            <h3 className="get-recipe--heading">Ready for a recipe</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button className="get-recipe--button">Get a recipe</button>
        </section>
      )}
    </section>
  );
};

export default IngredientsList;
