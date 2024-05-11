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
//     <div className="flex flex-col w-80 overflow-hidden p-5 bg-orange-500 shadow-xl gap-5 border-2 rounded-2xl border-white ">
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
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-green-500 shadow-xl gap-5 border-2 rounded-2xl border-white ">
     <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img
            src={image_url} alt="recipe item" className="block w-full"
         />
     </div>
     <div className="mt-4">
      <span className="text-lg text-black font-bold block"><b>Publisher:</b> {publisher}</span>
      <h3 className="font-bold text-2xl truncate  text-black mt-2 ">{title}</h3>
      <Link to={`./recipe-item/${recipe_id}`} className="text-sm mt-4 p-3 px-8 rounded-lg font-medium tracking-wider inline-block shadow-md bg-blue-800 text-orange uppercase hover:bg-white hover:text-orange hover:border-orange hover:border hover:border-orange"> 
      Recipe Details
      </Link>
     </div>
    </div>
  );
}

export default RecipeItem;



