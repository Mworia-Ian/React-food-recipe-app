import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favoriteList, setFavoriteList] = useState([])

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
      console.error("error fetching recipes", error);
      setLoading(false);
      setRecipeList([]);
    }

    console.log(loading, recipeList);
  }

  function handleAddToFavorites (getCurrentItem){
      console.log(getCurrentItem)
      let copyFavoritesList = [...favoriteList]
      const index = copyFavoritesList.findIndex(item => item.id === getCurrentItem.id)

      if(index === -1){
        copyFavoritesList.push(getCurrentItem)
      }
      else{
        copyFavoritesList.splice(index)
      }

      setFavoriteList(copyFavoritesList)

      console.log(favoriteList)
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
        favoriteList
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;



