// import { useContext } from "react";
// import { GlobalContext } from "../../context/GlobalState";
// import RecipeItem from "../../components/recipe-item/RecipeItem";

// function Home() {
//   const { recipeList, loading } = useContext(GlobalContext);

//   if (loading) return <div>Please Wait as we fetch your recipes!!!</div>;

//   return (
//     <div className="py-8 container mx-auto bg-gray-300 flex flex-wrap justify-center gap-10">
//       {recipeList && recipeList.length > 0 ? (
//         recipeList.map((item) => <RecipeItem key={item.recipe_id} item={item} />)
//       ) : (
//         <div className="text-2xl font-bold">
//           Search for your favorite recipe, I am sure we have it
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;//


import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import RecipeItem from "../../components/recipe-item/RecipeItem";

function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>Please Wait as we fetch your recipes!!!</div>;

  return (
    <div className="py-8 container mx-auto bg-gray-300 flex flex-wrap justify-center gap-10 bg-cover bg-center" >
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.recipe_id} item={item} />)
      ) : (
        <div className="text-2xl font-bold">
          Search for your favorite recipe, I am sure we have it
        </div>
      )}
    </div>
  );
}

export default Home;
