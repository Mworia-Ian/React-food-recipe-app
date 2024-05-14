import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

function Details() {
  const { id } = useParams();
  const { recipeList, favoriteList, handleAddToFavorites, handleRemoveFromFavorites } =
    useContext(GlobalContext);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false); 

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/get?rId=${id}`
      );
      const data = await response.json();

      if (data?.recipe) {
        setRecipeDetails(data.recipe);
        setIsFavorite(favoriteList.some(item => item.recipe_id === data.recipe.recipe_id));
      } else {
        setRecipeDetails(null);
      }
    }
    getRecipeDetails();
  }, [id, favoriteList]); 

  const handleToggleFavorites = () => {
    if (isFavorite) {
      handleRemoveFromFavorites(recipeDetails.recipe_id);
    } else {
      handleAddToFavorites(recipeDetails);
    }
    setIsFavorite(!isFavorite);
  };

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
            <span className="text-white">
              Ingredients: {recipeDetails.ingredients}
            </span>
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

                onClick={handleToggleFavorites}
                className="p-3 px-8 rounded-lg text-xl uppercase font-medium tracking-wider mt-3 inline text-white block bg-Dpplue"
main
              >
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
              </button>
            </div>
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
