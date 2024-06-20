import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../plugins/http";
import SingleRecipeComp from "../components/SingleRecipeComp";

function SearchPage() {
  const [recipes, setRecipes] = useState([]);
  const { word } = useParams();

  useEffect(() => {
    http.get("/search?q=" + word).then((res) => {
      console.log(res);
      setRecipes(res.recipes);
    });
  }, [word]);

  return (
    <div className="found-recipes">
      {recipes.length === 0
        ? "No results found."
        : recipes.map((x, i) => <SingleRecipeComp recipe={x} key={i} />)}
    </div>
  );
}

export default SearchPage;
