import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

export default function Navbar() {
  const { searchParam, setSearchParam , handleSubmit } = useContext(GlobalContext);

  console.log(searchParam);

  return (
    <nav className="sticky top-0 flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 bg-white">
      <h2 className="text-4xl font-semibold">
        <NavLink to={"/"} className="text-bblue hover:text-white hover:bg-bblue rounded p-3 duration-300">Thunder Recipes ⛈</NavLink>
      </h2>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="font-bold text-bblue hover:text-white hover:bg-bblue rounded p-3 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="font-bold text-bblue hover:text-white hover:bg-bblue rounded p-3 duration-300"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Search recipes..."
          className="bg-white/75 p-3 px-8 rounded-full outline-bblue lg:w-96 shadow-lg shadow-bblue focus:shadow-red-200"
        />
      </form>

    </nav>
  );
}