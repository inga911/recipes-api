import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../plugins/http";
import SingleRecipeComp from "../components/SingleRecipeComp";

function SearchTagsPage() {
  const [recipes, setRecipes] = useState([]);
  const { tag } = useParams();

  useEffect(() => {
    http.get("/tag/" + tag).then((res) => {
      console.log(res);
      setRecipes(res.recipes);
    });
  }, [tag]);

  return (
    <div className="found-recipes">
      {recipes.map((x, i) => (
        <SingleRecipeComp recipe={x} key={i} />
      ))}
    </div>
  );
}

export default SearchTagsPage;
