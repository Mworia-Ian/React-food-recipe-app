import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h2 className="text-4xl tracking-wider font-semibold italic size-8 text-red-500">
          <NavLink to={"/"} className=" text-red-800 hover:text-black-900">
            ThunderRecipe
          </NavLink>
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-row items-center">
          <input
            type="text"
            name="search"
            value={searchParam}
            onChange={(event) => setSearchParam(event.target.value)}
            placeholder="Search recipes..."
            className="bg-gray-100 py-1 px-3 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
          />
          <button type="submit" className="ml-2 bg-red-500 text-white font-semibold py-1 px-3 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-red-600 text-sm">Search</button>
        </form>
        <ul className="flex gap-4">
          <li>
            <NavLink
              to={"/"}
              className="text-red-800 hover:text-gray-900 duration-300 text-lg"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favorites"}
              className="text-red-800 hover:text-gray-900 duration-300 text-lg"
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
