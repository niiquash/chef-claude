import React from "react";
import IngredientsList from "./IngredientsList";

const Main = () => {
  const [ingredients, setIngredients] = React.useState([]);

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
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
      {<IngredientsList ingredients={ingredients} />}
    </main>
  );
};

export default Main;
