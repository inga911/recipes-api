import React from "react";
import { useNavigate } from "react-router-dom";

const SingleRecipeComp = ({ recipe }) => {
  const nav = useNavigate();

  return (
    <div
      className="each-recipe card"
      onClick={() => nav("/recipe/" + recipe.id)}
    >
      <img src={recipe.image} alt="Food" />
      <div className="title">{recipe.name}</div>
      <div>Meal type: {recipe.mealType}</div>
      <div>Servings: {recipe.servings}</div>
      <div className="line">
        <div>
          ⭐️
          {recipe.rating}
        </div>
        <div className="time">⏱ {recipe.cookTimeMinutes}</div>
        <div>
          {recipe.difficulty === "Easy"
            ? `⚡️${recipe.difficulty}`
            : recipe.difficulty === "Medium"
            ? `⚡️⚡️${recipe.difficulty}`
            : "⚡️⚡️⚡️"}
        </div>
      </div>
      <div>Cuisine: {recipe.cuisine}</div>
    </div>
  );
};

export default SingleRecipeComp;
