import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../plugins/http";

function SingleRecipePage() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    http.get("/" + id).then((data) => {
      setRecipe(data);
    });
  }, [id]);

  return (
    <div className="single-recipe-page">
      {recipe && (
        <>
          <div className="single-title">{recipe.name}</div>
          <img src={recipe.image} alt="Food" className="single-img" />
          <div className="main-info">
            <div>Meal type: {recipe.mealType}</div>
            <div>Servings: {recipe.servings}</div>
            <div>⭐️{recipe.rating}</div>
            <div>
              {recipe.difficulty === "Easy"
                ? `⚡️${recipe.difficulty}`
                : recipe.difficulty === "Medium"
                ? `⚡️⚡️${recipe.difficulty}`
                : `⚡️⚡️⚡️${recipe.difficulty}`}
            </div>
            <div>⏱ {recipe.cookTimeMinutes} min</div>
          </div>
          <div className="main-instructions">
            <div className="list ingredients">
              <b>You will need:</b>
              {recipe.ingredients.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </div>
            <div className="list instructions">
              <b>INSTRUCTIONS:</b>
              {recipe.instructions.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </div>
          </div>
          <div className="tags-box">
            <b>TAG's:</b>
            <div className="tags">
              {recipe.tags.map((x, i) => (
                <div className="tag" onClick={() => nav("/tag/" + x)} key={i}>
                  {x}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SingleRecipePage;
