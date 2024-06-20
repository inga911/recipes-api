import { useEffect } from "react";
import SingleRecipeComp from "../components/SingleRecipeComp";
import mainStore from "../store/mainStore";
import { useParams } from "react-router-dom";
import http from "../plugins/http";
import Pagination from "../components/Pagination";

function AllRecipesPage() {
  const { recipesObject, setRecipes } = mainStore();
  const { page } = useParams();

  useEffect(() => {
    const skipAmount = page ? 10 * (page - 1) : 0;

    http.get(`?limit=10&skip=${skipAmount}`).then((res) => {
      console.log(res);
      setRecipes(res);
    });
  }, [page, setRecipes]);

  return (
    <div>
      <div className="all-recipes">
        {recipesObject &&
          recipesObject.recipes.map((x, i) => (
            <SingleRecipeComp key={i} recipe={x} />
          ))}
      </div>
      <Pagination />
    </div>
  );
}

export default AllRecipesPage;
