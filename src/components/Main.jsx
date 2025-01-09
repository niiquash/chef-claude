import React from "react";
import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";

const Main = () => {
  const [ingredients, setIngredients] = React.useState([]);
  const [showRecipe, setShowRecipe] = React.useState(false);

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };

  const toggleShowRecipe = () => {
    setShowRecipe((prev) => !prev);
  };

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name={"ingredient"}
        />
        <button>Add Ingredient</button>
      </form>
      {
        <IngredientsList
          toggleShowRecipe={toggleShowRecipe}
          ingredients={ingredients}
        />
      }
      {showRecipe && <Recipe />}
    </main>
  );
};

export default Main;
