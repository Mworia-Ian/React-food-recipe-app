import React from "react";
import { Link } from "react-router-dom";


function RecipeItem({ item }) {
  const {
    publisher,
    title,
    // source_url,
    recipe_id,
    image_url,
    // social_rank,
    // publisher_url,
  } = item;

  return (
    <div className="flex flex-col w-80 overflow-hidden p-4 bg-bblue shadow-xl gap-5 border-4 rounded-3xl border-white">
     <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img
            src={image_url} alt="recipe item" className="block w-full"
         />
     </div>
     <div>
      <span className="text-m text-Dpplue font-bold"><b>Publisher:</b> {publisher}</span>
      <h3 className="font-bold text-2xl truncate  text-Electic-blue -500">{title}</h3>
      <Link to={`./recipe-item/${recipe_id}`} className="text-sm mt-6 p-2 px-4 rounded-xl font-medium tracking-wider inline-block shadow-md bg-Dpplue text-white uppercase ">
      Recipe Details
      </Link>
     </div>
    </div>
  );
}

export default RecipeItem;
