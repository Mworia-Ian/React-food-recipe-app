import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";
import RecipeItem from "../../components/recipe-item/RecipeItem";

function Favorites() {
    const { favoriteList} = useContext(GlobalContext);
  
    return (
      <div className="bg-Dpplue rounded-3xl py-9 container mx-auto flex flex-wrap justify-center gap-10 ">

        {favoriteList && favoriteList.length > 0 ? (
          favoriteList.map((item) => <RecipeItem key={item.recipe_id} item={item} />)
        ) : (
          <div className="text-Electic-blue text-2xl font-bold ">
            No Favorites Yet
          </div>
        )}
      </div>
    );
}

export default Favorites
