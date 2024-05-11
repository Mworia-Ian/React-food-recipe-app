import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${searchParam}`
      );

      const data = await res.json();

      if (data?.recipes) {
        setRecipeList(data.recipes);
      } else {
        setRecipeList([]);
      }

      setLoading(false);
      setSearchParam("");

      console.log(data);
    } catch (error) {
      console.error("Error fetching recipes", error);
      setLoading(false);
      setRecipeList([]);
    }

    console.log(loading, recipeList);
  }

  function handleAddToFavorites(getCurrentItem) {
    console.log(getCurrentItem);
    const updatedFavoritesList = [...favoriteList];
    const index = updatedFavoritesList.findIndex(
      (item) => item.recipe_id === getCurrentItem.recipe_id
    );

    if (index === -1) {
      updatedFavoritesList.push(getCurrentItem);
      setFavoriteList(updatedFavoritesList); 
    }
    console.log(updatedFavoritesList);
  }

  function handleRemoveFromFavorites(recipeIdToRemove) {
    const updatedFavoritesList = favoriteList.filter(
      (item) => item.recipe_id !== recipeIdToRemove
    );
    setFavoriteList(updatedFavoritesList);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetails,
        setRecipeDetails,
        handleAddToFavorites,
        favoriteList,
        handleRemoveFromFavorites 
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
