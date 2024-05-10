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
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-black/75 shadow-xl gap-5 border-4 rounded-3xl border-white">
     <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img
            src={image_url} alt="recipe item" className="block w-full"
         />
     </div>
     <div>
      <span className="text-m text-dark-orange -500 font-bold"><b>Publisher:</b> {publisher}</span>
      <h3 className="font-bold text-2xl truncate  text-orange-500">{title}</h3>
      <Link to={`./recipe-item/${recipe_id}`} className="text-sm mt-5 p-3 px-5 rounded-2xl font-medium tracking-wider inline-block shadow-md bg-Electic-blue text-black uppercase ">
      Recipe Details
      </Link>
     </div>
    </div>
  );
}

export default RecipeItem;
