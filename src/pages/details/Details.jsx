import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

function Details() {
  const { id } = useParams();
  const { recipeList, favoriteList, handleAddToFavorites } =
    useContext(GlobalContext);
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/get?rId=${id}`
      );
      const data = await response.json();

      if (data?.recipe) {
        setRecipeDetails(data.recipe);
      } else {
        setRecipeDetails(null);
      }
    }
    getRecipeDetails();
  }, [id]);

  return (
    <div className="flex flex-col w-80 overflow-hidden p-4 bg-bblue shadow-xl gap-5 border-4 rounded-3xl border-black">
      <div className="row-start-2 lg:row-start-auto">
        {recipeDetails && (
          <>
            <div className="bg-black h-95 w-95 overflow-hidden rounded-xl group">
              <img
                src={recipeDetails.image_url}
                alt={recipeDetails.title}
                className="w-full h-full rounded-xl object-cover block group-hover:scale-105 duration-300"
              />
            </div>
            <div className="<div className="flex flex-col w-80 overflow-hidden p-4 bg-bblue shadow-xl gap-5 border-4 rounded-3xl border-white>

              <h4 className="font-bold text-2xl truncate text-bp1 -500">
                {recipeDetails.title}
              </h4>
              <span className="text-l text-bp51 -500 font-bold">
                Publisher: {recipeDetails.publisher}
              </span>
            </div>
            <div>
              <a
                href={recipeDetails.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-Electic-blue -500 hover:underline"
              >
                View Recipe
              </a>
            </div>
            <div className="text-Dpplue" >
              <button
                onClick={() => handleAddToFavorites(recipeDetails)}
                className="p-3 px-3 rounded-lg text-m uppercase font-medium tracking-wider mt-4 inline text-white block bg-Dpplue hover:bg-siena "
              >
                {favoriteList &&
                favoriteList.length > 0 &&
                favoriteList.findIndex(
                  (item) => item.recipe_id === recipeDetails.recipe_id
                ) !== -1
                  ? "Remove from Favorites"
                  : "Add to Favorites"}
              </button>
            </div>
            <div className=""></div>
          </>
        )}
        {!recipeDetails && (
          <div className="p-6 ">
            <p className="text-gray-700">No recipe details found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Details;
