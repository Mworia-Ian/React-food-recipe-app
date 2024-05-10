// import React from "react";
// import { Link } from "react-router-dom";


// function RecipeItem({ item }) {
//   const {
//     publisher,
//     title,
//     // source_url,
//     recipe_id,
//     image_url,
//     // social_rank,
//     // publisher_url,
//   } = item;

//   return (
//     <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white ">
//      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
//         <img
//             src={image_url} alt="recipe item" className="block w-full"
//          />
//      </div>
//      <div>
//       <span className="text-l text-orange-500 font-bold"><b>Publisher:</b> {publisher}</span>
//       <h3 className="font-bold text-2xl truncate  text-orange-500">{title}</h3>
//       <Link to={`./recipe-item/${recipe_id}`} className="text-sm mt-5 p-3 px-8 rounded-lg font-medium tracking-wider inline-block shadow-md bg-blue-950 text-orange uppercase ">
//       Recipe Details
//       </Link>
//      </div>
//     </div>
//   );
// }

// export default RecipeItem;




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
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-orange-500 shadow-xl gap-5 border-2 rounded-2xl border-white ">
     <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img
            src={image_url} alt="recipe item" className="block w-full"
         />
     </div>
     <div>
      <span className="text-l text-white font-bold"><b>Publisher:</b> {publisher}</span>
      <h3 className="font-bold text-2xl truncate  text-white">{title}</h3>
      <Link to={`./recipe-item/${recipe_id}`} className="text-sm mt-5 p-3 px-8 rounded-lg font-medium tracking-wider inline-block shadow-md bg-blue-950 text-orange uppercase ">
      Recipe Details
      </Link>
     </div>
    </div>
  );
}

export default RecipeItem;





